import { createElement, addClass, removeClass } from '../../utils';
import { ButtonOptions, ButtonComponent, ButtonType, Size } from '../../types';

class Button implements ButtonComponent {
  public element: HTMLButtonElement;
  private options: Required<ButtonOptions>;
  
  constructor(options: ButtonOptions = {}) {
    this.options = {
      text: '按钮',
      type: 'primary' as ButtonType,
      size: 'medium' as Size,
      disabled: false,
      loading: false,
      round: false,
      block: false,
      ghost: false,
      onClick: null,
      ...options
    };
    
    this.element = this.createElement();
    this.bindEvents();
  }
  
  private createElement(): HTMLButtonElement {
    const button = createElement('button', this.getClassName(), this.options.text);
    
    if (this.options.disabled) {
      button.disabled = true;
    }
    
    return button;
  }
  
  private getClassName(): string {
    const { type, size, disabled, loading, round, block, ghost } = this.options;
    let className = 'neu-button';
    
    className += ` neu-button--${type}`;
    className += ` neu-button--${size}`;
    
    if (disabled) {
      className += ' neu-button--disabled';
    }
    
    if (loading) {
      className += ' neu-button--loading';
    }
    
    if (round) {
      className += ' neu-button--round';
    }
    
    if (block) {
      className += ' neu-button--block';
    }
    
    if (ghost) {
      className += ' neu-button--ghost';
    }
    
    return className;
  }
  
  private bindEvents(): void {
    this.element.addEventListener('click', (e: MouseEvent) => {
      if (this.options.disabled || this.options.loading) {
        e.preventDefault();
        return;
      }
      
      if (this.options.onClick) {
        this.options.onClick(e);
      }
    });
  }
  
  // 公共方法
  public setText(text: string): void {
    this.options.text = text;
    this.element.textContent = text;
  }
  
  public setDisabled(disabled: boolean): void {
    this.options.disabled = disabled;
    this.element.disabled = disabled;
    
    if (disabled) {
      addClass(this.element, 'neu-button--disabled');
    } else {
      removeClass(this.element, 'neu-button--disabled');
    }
  }
  
  public setLoading(loading: boolean): void {
    this.options.loading = loading;
    
    if (loading) {
      addClass(this.element, 'neu-button--loading');
      this.setDisabled(true);
    } else {
      removeClass(this.element, 'neu-button--loading');
      this.setDisabled(this.options.disabled);
    }
  }
  
  public setType(type: ButtonType): void {
    const oldClassName = `neu-button--${this.options.type}`;
    const newClassName = `neu-button--${type}`;
    
    removeClass(this.element, oldClassName);
    addClass(this.element, newClassName);
    
    this.options.type = type;
  }
  
  public setSize(size: Size): void {
    const oldClassName = `neu-button--${this.options.size}`;
    const newClassName = `neu-button--${size}`;
    
    removeClass(this.element, oldClassName);
    addClass(this.element, newClassName);
    
    this.options.size = size;
  }
  
  public destroy(): void {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

export default Button;