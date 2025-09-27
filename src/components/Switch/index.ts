import { createElement, addClass, removeClass } from '../../utils';
import { SwitchOptions, SwitchComponent, Size } from '../../types';

class Switch implements SwitchComponent {
  public element: HTMLLabelElement;
  private inputElement: HTMLInputElement;
  private trackElement: HTMLSpanElement;
  private thumbElement: HTMLSpanElement;
  private labelElement?: HTMLSpanElement;
  private options: Required<SwitchOptions>;
  
  constructor(options: SwitchOptions = {}) {
    this.options = {
      checked: false,
      disabled: false,
      size: 'medium' as Size,
      checkedText: '',
      uncheckedText: '',
      checkedColor: '',
      uncheckedColor: '',
      onChange: null,
      ...options
    };
    
    this.element = this.createElement();
    this.bindEvents();
  }
  
  private createElement(): HTMLLabelElement {
    const wrapper = createElement('label', this.getClassName());
    
    // 创建隐藏的checkbox
    const input = createElement('input', 'neu-switch__input');
    input.type = 'checkbox';
    input.checked = this.options.checked;
    input.disabled = this.options.disabled;
    
    // 创建开关外观
    const track = createElement('span', 'neu-switch__track');
    const thumb = createElement('span', 'neu-switch__thumb');
    track.appendChild(thumb);
    
    // 创建文本标签
    if (this.options.checkedText || this.options.uncheckedText) {
      const label = createElement('span', 'neu-switch__label');
      label.textContent = this.options.checked ? 
        this.options.checkedText : this.options.uncheckedText;
      wrapper.appendChild(label);
      this.labelElement = label;
    }
    
    wrapper.appendChild(input);
    wrapper.appendChild(track);
    
    this.inputElement = input;
    this.trackElement = track;
    this.thumbElement = thumb;
    
    // 应用自定义颜色
    this.updateColors();
    
    return wrapper;
  }
  
  private getClassName(): string {
    const { size, disabled, checked } = this.options;
    let className = 'neu-switch';
    
    className += ` neu-switch--${size}`;
    
    if (disabled) {
      className += ' neu-switch--disabled';
    }
    
    if (checked) {
      className += ' neu-switch--checked';
    }
    
    return className;
  }
  
  private bindEvents(): void {
    this.inputElement.addEventListener('change', (e: Event) => {
      if (this.options.disabled) {
        return;
      }
      
      const target = e.target as HTMLInputElement;
      const checked = target.checked;
      this.setChecked(checked);
      
      if (this.options.onChange) {
        this.options.onChange(checked);
      }
    });
  }
  
  private updateColors(): void {
    if (this.options.checkedColor && this.options.checked) {
      this.thumbElement.style.background = this.options.checkedColor;
    } else if (this.options.uncheckedColor && !this.options.checked) {
      this.thumbElement.style.background = this.options.uncheckedColor;
    }
  }
  
  // 公共方法
  public setChecked(checked: boolean): void {
    this.options.checked = checked;
    this.inputElement.checked = checked;
    
    if (checked) {
      addClass(this.element, 'neu-switch--checked');
    } else {
      removeClass(this.element, 'neu-switch--checked');
    }
    
    // 更新文本标签
    if (this.labelElement) {
      this.labelElement.textContent = checked ? 
        this.options.checkedText : this.options.uncheckedText;
    }
    
    // 更新颜色
    this.updateColors();
  }
  
  public setDisabled(disabled: boolean): void {
    this.options.disabled = disabled;
    this.inputElement.disabled = disabled;
    
    if (disabled) {
      addClass(this.element, 'neu-switch--disabled');
    } else {
      removeClass(this.element, 'neu-switch--disabled');
    }
  }
  
  public setSize(size: Size): void {
    const oldClassName = `neu-switch--${this.options.size}`;
    const newClassName = `neu-switch--${size}`;
    
    removeClass(this.element, oldClassName);
    addClass(this.element, newClassName);
    
    this.options.size = size;
  }
  
  public setCheckedText(text: string): void {
    this.options.checkedText = text;
    if (this.labelElement && this.options.checked) {
      this.labelElement.textContent = text;
    }
  }
  
  public setUncheckedText(text: string): void {
    this.options.uncheckedText = text;
    if (this.labelElement && !this.options.checked) {
      this.labelElement.textContent = text;
    }
  }
  
  public setColors(checkedColor: string, uncheckedColor: string): void {
    this.options.checkedColor = checkedColor;
    this.options.uncheckedColor = uncheckedColor;
    this.updateColors();
  }
  
  public toggle(): void {
    if (!this.options.disabled) {
      this.setChecked(!this.options.checked);
      if (this.options.onChange) {
        this.options.onChange(this.options.checked);
      }
    }
  }
  
  public isChecked(): boolean {
    return this.options.checked;
  }
  
  public destroy(): void {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

export default Switch;