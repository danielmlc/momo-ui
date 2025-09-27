// 组件库类型定义

// 基础类型
export type Size = 'small' | 'medium' | 'large';
export type ButtonType = 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type ShadowLevel = 'none' | 'small' | 'normal' | 'large';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

// 事件回调类型
export type EventCallback<T = Event> = (event: T) => void;
export type ChangeCallback<T = any> = (value: T) => void;

// 按钮组件接口
export interface ButtonOptions {
  text?: string;
  type?: ButtonType;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  round?: boolean;
  block?: boolean;
  ghost?: boolean;
  onClick?: EventCallback<MouseEvent>;
}

// 卡片组件接口
export interface CardOptions {
  title?: string;
  content?: string | HTMLElement;
  footer?: string | HTMLElement;
  hoverable?: boolean;
  shadow?: ShadowLevel;
  bordered?: boolean;
  simple?: boolean;
  image?: boolean;
}

// 输入框组件接口
export interface InputOptions {
  type?: InputType;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  size?: Size;
  maxLength?: number;
  readonly?: boolean;
  autofocus?: boolean;
  icon?: string;
  suffix?: string;
  onInput?: ChangeCallback<string>;
  onChange?: ChangeCallback<string>;
  onFocus?: EventCallback<FocusEvent>;
  onBlur?: EventCallback<FocusEvent>;
}

// 开关组件接口
export interface SwitchOptions {
  checked?: boolean;
  disabled?: boolean;
  size?: Size;
  checkedText?: string;
  uncheckedText?: string;
  checkedColor?: string;
  uncheckedColor?: string;
  onChange?: ChangeCallback<boolean>;
}

// 主题类型
export type ThemeType = 'light' | 'dark' | 'colorful';

// 主题配置接口
export interface ThemeConfig {
  name: ThemeType;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    bgPrimary: string;
    bgSecondary: string;
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    shadowLight: string;
    shadowDark: string;
  };
}

// 工具函数类型
export interface UtilFunctions {
  addClass: (element: HTMLElement, className: string) => void;
  removeClass: (element: HTMLElement, className: string) => void;
  toggleClass: (element: HTMLElement, className: string) => void;
  createElement: <K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className?: string,
    textContent?: string
  ) => HTMLElementTagNameMap[K];
  delegate: (
    parent: HTMLElement,
    selector: string,
    event: string,
    callback: EventCallback
  ) => void;
}

// 组件基类接口
export interface ComponentBase {
  element: HTMLElement;
  destroy(): void;
}

// 按钮组件类接口
export interface ButtonComponent extends ComponentBase {
  setText(text: string): void;
  setDisabled(disabled: boolean): void;
  setLoading(loading: boolean): void;
}

// 卡片组件类接口
export interface CardComponent extends ComponentBase {
  setTitle(title: string): void;
  setContent(content: string | HTMLElement): void;
}

// 输入框组件类接口
export interface InputComponent extends ComponentBase {
  getValue(): string;
  setValue(value: string): void;
  setDisabled(disabled: boolean): void;
  focus(): void;
  blur(): void;
}

// 开关组件类接口
export interface SwitchComponent extends ComponentBase {
  setChecked(checked: boolean): void;
  setDisabled(disabled: boolean): void;
  isChecked(): boolean;
}

// 组件构造函数类型
export type ButtonConstructor = new (options?: ButtonOptions) => ButtonComponent;
export type CardConstructor = new (options?: CardOptions) => CardComponent;
export type InputConstructor = new (options?: InputOptions) => InputComponent;
export type SwitchConstructor = new (options?: SwitchOptions) => SwitchComponent;

// 组件库导出接口
export interface MomoUI {
  Button: ButtonConstructor;
  Card: CardConstructor;
  Input: InputConstructor;
  Switch: SwitchConstructor;
  version: string;
}

// DOM 相关类型扩展
declare global {
  interface HTMLElement {
    matches(selectors: string): boolean;
  }
}

// CSS 相关类型
export interface CSSProperties {
  [key: string]: string | number;
}

// 动画配置
export interface AnimationConfig {
  duration: number;
  easing: string;
  fill?: 'none' | 'forwards' | 'backwards' | 'both';
}

// 位置相关类型
export interface Position {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export interface Rect {
  width: number;
  height: number;
  top: number;
  left: number;
  bottom: number;
  right: number;
}