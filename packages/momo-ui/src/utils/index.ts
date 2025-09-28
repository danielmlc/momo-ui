// 工具函数
import { EventCallback } from '../types';

// 添加类名
export function addClass(element: HTMLElement, className: string): void {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
}

// 移除类名
export function removeClass(element: HTMLElement, className: string): void {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), 
      ' '
    );
  }
}

// 切换类名
export function toggleClass(element: HTMLElement, className: string): void {
  if (element.classList) {
    element.classList.toggle(className);
  } else {
    const classes = element.className.split(' ');
    const existingIndex = classes.indexOf(className);
    
    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push(className);
    }
    
    element.className = classes.join(' ');
  }
}

// 创建元素
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  textContent?: string
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

// 事件委托
export function delegate(
  parent: HTMLElement,
  selector: string,
  event: string,
  callback: EventCallback
): void {
  parent.addEventListener(event, function(e: Event) {
    const target = e.target as HTMLElement;
    if (target && target.matches && target.matches(selector)) {
      callback.call(target, e);
    }
  });
}

// 获取元素位置信息
export function getElementRect(element: HTMLElement): DOMRect {
  return element.getBoundingClientRect();
}

// 判断元素是否在视口中
export function isElementInViewport(element: HTMLElement): boolean {
  const rect = getElementRect(element);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let previous = 0;
  
  return function(this: any, ...args: Parameters<T>) {
    const now = Date.now();
    
    if (!previous) previous = now;
    
    const remaining = wait - (now - previous);
    
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}