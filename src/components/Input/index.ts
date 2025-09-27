import { createElement, addClass, removeClass } from '../../utils';
import { InputOptions, InputComponent, InputType, Size } from '../../types';

class Input implements InputComponent {
  public element: HTMLDivElement;
  private inputElement: HTMLInputElement;
  private options: Required<InputOptions>;
  
  constructor(options: InputOptions = {}) {
    this.options = {
      type: 'text' as InputType,
      placeholder: '',
      value: '',
      disabled: false,
      size: 'medium' as Size,
      maxLength: undefined,
      readonly: false,
      autofocus: false,
      icon: '',
      suffix: '',
      onInput: null,
      onChange: null,
      onFocus: null,
      onBlur: null,
      ...options
    };
    
    this.element = this.createElement();
    this.bindEvents();
  }
  
  private createElement(): HTMLDivElement {
    const wrapper = createElement('div', this.getWrapperClassName());
    
    // 添加图标
    if (this.options.icon) {
      const icon = createElement('span', 'neu-input__icon');
      icon.innerHTML = this.options.icon;
      wrapper.appendChild(icon);
    }
    
    const input = createElement('input', 'neu-input__inner');
    
    input.type = this.options.type;
    input.placeholder = this.options.placeholder;
    input.value = this.options.value;
    input.disabled = this.options.disabled;
    input.readOnly = this.options.readonly;
    
    if (this.options.maxLength !== undefined) {
      input.maxLength = this.options.maxLength;
    }
    
    if (this.options.autofocus) {
      input.autofocus = true;
    }
    
    wrapper.appendChild(input);
    this.inputElement = input;
    
    // 添加后缀
    if (this.options.suffix) {
      const suffix = createElement('span', 'neu-input__suffix');
      suffix.innerHTML = this.options.suffix;
      wrapper.appendChild(suffix);
    }
    
    return wrapper;
  }
  
  private getWrapperClassName(): string {
    const { size, disabled, icon, suffix } = this.options;
    let className = 'neu-input';
    
    className += ` neu-input--${size}`;
    
    if (disabled) {
      className += ' neu-input--disabled';
    }
    
    if (icon) {
      className += ' neu-input--with-icon';
    }
    
    if (suffix) {
      className += ' neu-input--with-suffix';
    }
    
    return className;
  }
  
  private bindEvents(): void {
    this.inputElement.addEventListener('focus', (e: FocusEvent) => {
      addClass(this.element, 'neu-input--focused');
      if (this.options.onFocus) {
        this.options.onFocus(e);
      }
    });
    
    this.inputElement.addEventListener('blur', (e: FocusEvent) => {
      removeClass(this.element, 'neu-input--focused');
      if (this.options.onBlur) {
        this.options.onBlur(e);
      }
    });
    
    this.inputElement.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      this.options.value = target.value;
      if (this.options.onInput) {
        this.options.onInput(target.value);
      }
    });
    
    this.inputElement.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (this.options.onChange) {
        this.options.onChange(target.value);
      }
    });
  }
  
  // 公共方法
  public getValue(): string {
    return this.inputElement.value;
  }
  
  public setValue(value: string): void {
    this.inputElement.value = value;
    this.options.value = value;
  }
  
  public setDisabled(disabled: boolean): void {
    this.options.disabled = disabled;
    this.inputElement.disabled = disabled;
    
    if (disabled) {
      addClass(this.element, 'neu-input--disabled');
    } else {
      removeClass(this.element, 'neu-input--disabled');
    }
  }
  
  public setReadonly(readonly: boolean): void {
    this.options.readonly = readonly;
    this.inputElement.readOnly = readonly;
  }
  
  public setPlaceholder(placeholder: string): void {
    this.options.placeholder = placeholder;
    this.inputElement.placeholder = placeholder;
  }
  
  public setMaxLength(maxLength: number): void {
    this.options.maxLength = maxLength;
    this.inputElement.maxLength = maxLength;
  }
  
  public focus(): void {
    this.inputElement.focus();
  }
  
  public blur(): void {
    this.inputElement.blur();
  }
  
  public select(): void {
    this.inputElement.select();
  }
  
  public clear(): void {
    this.setValue('');
  }
  
  public destroy(): void {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

export default Input;