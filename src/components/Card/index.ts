import { createElement } from '../../utils';
import { CardOptions, CardComponent, ShadowLevel } from '../../types';

class Card implements CardComponent {
  public element: HTMLDivElement;
  private options: Required<CardOptions>;
  
  constructor(options: CardOptions = {}) {
    this.options = {
      title: '',
      content: '',
      footer: '',
      hoverable: true,
      shadow: 'normal' as ShadowLevel,
      bordered: false,
      simple: false,
      image: false,
      ...options
    };
    
    this.element = this.createElement();
  }
  
  private createElement(): HTMLDivElement {
    const card = createElement('div', this.getClassName());
    
    // 创建卡片头部
    if (this.options.title) {
      const header = createElement('div', 'neu-card__header');
      const title = createElement('h3', 'neu-card__title', this.options.title);
      header.appendChild(title);
      card.appendChild(header);
    }
    
    // 创建卡片内容
    const body = createElement('div', 'neu-card__body');
    this.updateBodyContent(body, this.options.content);
    card.appendChild(body);
    
    // 创建卡片底部
    if (this.options.footer) {
      const footer = createElement('div', 'neu-card__footer');
      this.updateFooterContent(footer, this.options.footer);
      card.appendChild(footer);
    }
    
    return card;
  }
  
  private getClassName(): string {
    const { hoverable, shadow, bordered, simple, image } = this.options;
    let className = 'neu-card';
    
    if (hoverable) {
      className += ' neu-card--hoverable';
    }
    
    if (bordered) {
      className += ' neu-card--bordered';
    }
    
    if (simple) {
      className += ' neu-card--simple';
    }
    
    if (image) {
      className += ' neu-card--image';
    }
    
    className += ` neu-card--shadow-${shadow}`;
    
    return className;
  }
  
  private updateBodyContent(bodyElement: HTMLDivElement, content: string | HTMLElement): void {
    if (typeof content === 'string') {
      bodyElement.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      bodyElement.innerHTML = '';
      bodyElement.appendChild(content);
    }
  }
  
  private updateFooterContent(footerElement: HTMLDivElement, footer: string | HTMLElement): void {
    if (typeof footer === 'string') {
      footerElement.innerHTML = footer;
    } else if (footer instanceof HTMLElement) {
      footerElement.innerHTML = '';
      footerElement.appendChild(footer);
    }
  }
  
  // 公共方法
  public setTitle(title: string): void {
    this.options.title = title;
    const titleElement = this.element.querySelector('.neu-card__title') as HTMLElement;
    if (titleElement) {
      titleElement.textContent = title;
    }
  }
  
  public setContent(content: string | HTMLElement): void {
    this.options.content = content;
    const bodyElement = this.element.querySelector('.neu-card__body') as HTMLDivElement;
    if (bodyElement) {
      this.updateBodyContent(bodyElement, content);
    }
  }
  
  public setFooter(footer: string | HTMLElement): void {
    this.options.footer = footer;
    let footerElement = this.element.querySelector('.neu-card__footer') as HTMLDivElement;
    
    if (!footerElement && footer) {
      // 如果不存在footer元素但需要设置footer，则创建一个
      footerElement = createElement('div', 'neu-card__footer');
      this.element.appendChild(footerElement);
    }
    
    if (footerElement) {
      if (footer) {
        this.updateFooterContent(footerElement, footer);
      } else {
        // 如果footer为空，则移除footer元素
        footerElement.remove();
      }
    }
  }
  
  public setShadow(shadow: ShadowLevel): void {
    const oldClassName = `neu-card--shadow-${this.options.shadow}`;
    const newClassName = `neu-card--shadow-${shadow}`;
    
    this.element.classList.remove(oldClassName);
    this.element.classList.add(newClassName);
    
    this.options.shadow = shadow;
  }
  
  public destroy(): void {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

export default Card;