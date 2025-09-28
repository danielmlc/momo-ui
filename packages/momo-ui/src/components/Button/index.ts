import { createElement, addClass, removeClass } from '../../utils';
import { ButtonOptions, ButtonComponent, ButtonType, ButtonVariant, Size, IconPosition } from '../../types';

class Button implements ButtonComponent {
  public element: HTMLButtonElement;
  private options: Required<ButtonOptions>;
  private iconElement?: HTMLElement;
  private textElement?: HTMLElement;
  
  constructor(options: ButtonOptions = {}) {
    this.options = {
      text: '按钮',
      type: 'primary' as ButtonType,
      variant: 'default' as ButtonVariant,
      size: 'medium' as Size,
      disabled: false,
      loading: false,
      block: false,
      icon: '',
      iconPosition: 'left' as IconPosition,
      htmlType: 'button' as const,
      autoFocus: false,
      className: '',
      style: {},
      onClick: null,
      onFocus: null,
      onBlur: null,
      ...options
    };
    
    this.element = this.createElement();
    this.bindEvents();
  }
  
  private createElement(): HTMLButtonElement {
    const button = createElement('button', this.getClassName());
    
    // 设置按钮类型
    button.type = this.options.htmlType;
    
    // 设置禁用状态
    if (this.options.disabled) {
      button.disabled = true;
    }
    
    // 设置自动聚焦
    if (this.options.autoFocus) {
      button.autofocus = true;
    }
    
    // 应用自定义样式
    if (this.options.style) {
      Object.assign(button.style, this.options.style);
    }
    
    // 创建按钮内容
    this.createButtonContent(button);
    
    return button;
  }
  
  private createButtonContent(button: HTMLButtonElement): void {
    // 清空按钮内容
    button.innerHTML = '';
    
    const hasIcon = this.options.icon && this.options.iconPosition !== 'only';
    const hasText = this.options.text && this.options.iconPosition !== 'only';
    const isIconOnly = this.options.icon && this.options.iconPosition === 'only';
    
    // 仅图标模式
    if (isIconOnly) {
      this.createIcon(button);
      return;
    }
    
    // 图标在左侧
    if (hasIcon && this.options.iconPosition === 'left') {
      this.createIcon(button);
    }
    
    // 创建文本
    if (hasText) {
      this.createText(button);
    }
    
    // 图标在右侧
    if (hasIcon && this.options.iconPosition === 'right') {
      this.createIcon(button);
    }
  }
  
  private createIcon(container: HTMLElement): void {
    const iconEl = createElement('span', 'momo-button__icon');
    iconEl.classList.add(`momo-button__icon--${this.options.iconPosition}`);
    
    if (typeof this.options.icon === 'string') {
      iconEl.innerHTML = this.options.icon;
    } else if (this.options.icon instanceof HTMLElement) {
      iconEl.appendChild(this.options.icon.cloneNode(true));
    }
    
    container.appendChild(iconEl);
    this.iconElement = iconEl;
  }
  
  private createText(container: HTMLElement): void {
    const textEl = createElement('span', 'momo-button__text', this.options.text);
    container.appendChild(textEl);
    this.textElement = textEl;
  }
  
  private getClassName(): string {
    const { type, variant, size, disabled, loading, block, className } = this.options;
    let classNames = ['momo-button'];
    
    // 尺寸
    classNames.push(`momo-button--${size}`);
    
    // 变体
    if (variant !== 'default') {
      classNames.push(`momo-button--${variant}`);
    }
    
    // 类型
    if (variant === 'filled' || variant === 'text' || variant === 'icon' || variant === 'floating') {
      classNames.push(`momo-button--${type}`);
    }
    
    // 状态
    if (disabled) {
      classNames.push('momo-button--disabled');
    }
    
    if (loading) {
      classNames.push('momo-button--loading');
    }
    
    if (block) {
      classNames.push('momo-button--block');
    }
    
    // 自定义类名
    if (className) {
      classNames.push(className);
    }
    
    // 向后兼容的类名
    classNames.push('neu-button');
    classNames.push(`neu-button--${size}`);
    
    // 映射旧的类型名称
    if (variant === 'filled') {
      switch (type) {
        case 'primary':
          classNames.push('neu-button--primary');
          break;
        case 'success':
          classNames.push('neu-button--success');
          break;
        case 'warning':
          classNames.push('neu-button--warning');
          break;
        case 'danger':
          classNames.push('neu-button--error');
          break;
      }
    } else if (variant === 'text') {
      classNames.push('neu-button--secondary');
    }
    
    return classNames.join(' ');
  }
  
  private bindEvents(): void {
    // 点击事件
    this.element.addEventListener('click', (e: MouseEvent) => {
      if (this.options.disabled || this.options.loading) {
        e.preventDefault();
        return;
      }
      
      if (this.options.onClick) {
        this.options.onClick(e);
      }
    });
    
    // 焦点事件
    this.element.addEventListener('focus', (e: FocusEvent) => {
      if (this.options.onFocus) {
        this.options.onFocus(e);
      }
    });
    
    this.element.addEventListener('blur', (e: FocusEvent) => {
      if (this.options.onBlur) {
        this.options.onBlur(e);
      }
    });
  }
  
  private updateClassName(): void {
    this.element.className = this.getClassName();
  }
  
  // 公共方法
  public setText(text: string): void {
    this.options.text = text;
    
    if (this.textElement) {
      this.textElement.textContent = text;
    } else {
      // 重新创建按钮内容
      this.createButtonContent(this.element);
    }
  }
  
  public setDisabled(disabled: boolean): void {
    this.options.disabled = disabled;
    this.element.disabled = disabled;
    this.updateClassName();
  }
  
  public setLoading(loading: boolean): void {
    const wasLoading = this.options.loading;
    this.options.loading = loading;
    
    if (loading && !wasLoading) {
      // 开始加载状态
      this.element.setAttribute('aria-disabled', 'true');
    } else if (!loading && wasLoading) {
      // 结束加载状态
      this.element.removeAttribute('aria-disabled');
    }
    
    this.updateClassName();
  }
  
  public setType(type: ButtonType): void {
    this.options.type = type;
    this.updateClassName();
  }
  
  public setVariant(variant: ButtonVariant): void {
    this.options.variant = variant;
    this.updateClassName();
    
    // 如果切换到图标模式，需要重新创建内容
    if (variant === 'icon' || variant === 'floating') {
      this.createButtonContent(this.element);
    }
  }
  
  public setSize(size: Size): void {
    this.options.size = size;
    this.updateClassName();
  }
  
  public setIcon(icon: string | HTMLElement, position: IconPosition = 'left'): void {
    this.options.icon = icon;
    this.options.iconPosition = position;
    this.createButtonContent(this.element);
  }
  
  public removeIcon(): void {
    this.options.icon = '';
    this.iconElement = undefined;
    this.createButtonContent(this.element);
  }
  
  public focus(): void {
    this.element.focus();
  }
  
  public blur(): void {
    this.element.blur();
  }
  
  public click(): void {
    this.element.click();
  }
  
  public destroy(): void {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

export default Button;