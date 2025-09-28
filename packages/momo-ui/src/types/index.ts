// 组件库类型定义

// 基础类型
export type Size = 'small' | 'medium' | 'large';
export type ButtonType = 'primary' | 'info' | 'success' | 'warning' | 'danger';
export type ButtonVariant = 'default' | 'filled' | 'text' | 'icon' | 'floating';
export type IconPosition = 'left' | 'right' | 'only';
export type ShadowLevel = 'none' | 'small' | 'normal' | 'large';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

// 事件回调类型
export type EventCallback<T = Event> = (event: T) => void;
export type ChangeCallback<T = any> = (value: T) => void;

// 按钮组件接口
export interface ButtonOptions {
  text?: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  icon?: string | HTMLElement;
  iconPosition?: IconPosition;
  htmlType?: 'button' | 'submit' | 'reset';
  autoFocus?: boolean;
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
  onClick?: EventCallback<MouseEvent> | null;
  onFocus?: EventCallback<FocusEvent> | null;
  onBlur?: EventCallback<FocusEvent> | null;
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
  setType(type: ButtonType): void;
  setVariant(variant: ButtonVariant): void;
  setSize(size: Size): void;
  setIcon(icon: string | HTMLElement, position?: IconPosition): void;
  removeIcon(): void;
  focus(): void;
  blur(): void;
  click(): void;
}


// 组件构造函数类型
export type ButtonConstructor = new (options?: ButtonOptions) => ButtonComponent;

// 组件库导出接口
export interface MomoUI {
  Button: ButtonConstructor;
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