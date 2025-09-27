// 导入组件库
import { Button } from '../src/index';
import type { ButtonComponent } from '../src/types';

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function(): void {
    // 初始化所有演示组件
    initButtonDemo();
    initThemeSwitcher();
});

// 按钮演示
function initButtonDemo(): void {
    // 按钮状态演示 (Default, Hover, Pressed, Disabled)
    const basicButtonsContainer = document.getElementById('basicButtons');
    if (!basicButtonsContainer) return;
    
    const defaultBtn: ButtonComponent = new Button({
        text: 'Default',
        variant: 'default',
        onClick: () => showMessage('默认按钮被点击了！')
    });
    
    const hoverBtn: ButtonComponent = new Button({
        text: 'Hover',
        variant: 'default',
        onClick: () => showMessage('悬浮按钮被点击了！')
    });
    
    const pressedBtn: ButtonComponent = new Button({
        text: 'Pressed',
        variant: 'default',
        onClick: () => showMessage('按下按钮被点击了！')
    });
    
    const disabledBtn: ButtonComponent = new Button({
        text: 'Disabled',
        variant: 'default',
        disabled: true
    });
    
    basicButtonsContainer.appendChild(defaultBtn.element);
    basicButtonsContainer.appendChild(hoverBtn.element);
    basicButtonsContainer.appendChild(pressedBtn.element);
    basicButtonsContainer.appendChild(disabledBtn.element);
    
    // 按钮尺寸演示 (Small, Medium, Large)
    const sizeButtonsContainer = document.getElementById('sizeButtons');
    if (!sizeButtonsContainer) return;
    
    const smallBtn: ButtonComponent = new Button({
        text: 'Small',
        size: 'small',
        variant: 'default'
    });
    
    const mediumBtn: ButtonComponent = new Button({
        text: 'Medium',
        size: 'medium',
        variant: 'default'
    });
    
    const largeBtn: ButtonComponent = new Button({
        text: 'Large',
        size: 'large',
        variant: 'default'
    });
    
    sizeButtonsContainer.appendChild(smallBtn.element);
    sizeButtonsContainer.appendChild(mediumBtn.element);
    sizeButtonsContainer.appendChild(largeBtn.element);
    
    // 填充按钮演示 (Primary, Info, Danger, Warn, Success)
    const typeButtonsContainer = document.getElementById('typeButtons');
    if (!typeButtonsContainer) return;
    
    const primaryBtn: ButtonComponent = new Button({
        text: 'Primary',
        type: 'primary',
        variant: 'filled',
        onClick: () => showMessage('主要按钮被点击了！')
    });
    
    const infoBtn: ButtonComponent = new Button({
        text: 'Info',
        type: 'info',
        variant: 'filled',
        onClick: () => showMessage('信息按钮被点击了！')
    });
    
    const dangerBtn: ButtonComponent = new Button({
        text: 'Danger',
        type: 'danger',
        variant: 'filled',
        onClick: () => showMessage('危险按钮被点击了！')
    });
    
    const warningBtn: ButtonComponent = new Button({
        text: 'Warn',
        type: 'warning',
        variant: 'filled',
        onClick: () => showMessage('警告按钮被点击了！')
    });
    
    const successBtn: ButtonComponent = new Button({
        text: 'Success',
        type: 'success',
        variant: 'filled',
        onClick: () => showMessage('成功按钮被点击了！')
    });
    
    typeButtonsContainer.appendChild(primaryBtn.element);
    typeButtonsContainer.appendChild(infoBtn.element);
    typeButtonsContainer.appendChild(dangerBtn.element);
    typeButtonsContainer.appendChild(warningBtn.element);
    typeButtonsContainer.appendChild(successBtn.element);
    
    // 特殊状态按钮
    const stateButtonsContainer = document.getElementById('stateButtons');
    if (!stateButtonsContainer) return;
    
    const loadingBtn: ButtonComponent = new Button({
        text: '加载中',
        variant: 'filled',
        type: 'primary',
        loading: true
    });
    
    const blockBtn: ButtonComponent = new Button({
        text: '块级按钮',
        variant: 'filled',
        type: 'primary',
        block: true
    });
    
    stateButtonsContainer.appendChild(loadingBtn.element);
    stateButtonsContainer.appendChild(blockBtn.element);
    
    // 创建新的容器来演示其他按钮类型
    createTextButtonsDemo();
    createIconButtonsDemo();
    createFloatingButtonDemo();
}

// 文本按钮演示
function createTextButtonsDemo(): void {
    const container = document.createElement('div');
    container.className = 'demo-item';
    container.innerHTML = '<h4>文本按钮</h4>';
    
    const textButtonsContainer = document.createElement('div');
    textButtonsContainer.style.display = 'flex';
    textButtonsContainer.style.gap = '10px';
    textButtonsContainer.style.flexWrap = 'wrap';
    
    const primaryTextBtn: ButtonComponent = new Button({
        text: 'Primary',
        type: 'primary',
        variant: 'text'
    });
    
    const infoTextBtn: ButtonComponent = new Button({
        text: 'Info',
        type: 'info',
        variant: 'text'
    });
    
    const dangerTextBtn: ButtonComponent = new Button({
        text: 'Danger',
        type: 'danger',
        variant: 'text'
    });
    
    const warningTextBtn: ButtonComponent = new Button({
        text: 'Warn',
        type: 'warning',
        variant: 'text'
    });
    
    const successTextBtn: ButtonComponent = new Button({
        text: 'Success',
        type: 'success',
        variant: 'text'
    });
    
    textButtonsContainer.appendChild(primaryTextBtn.element);
    textButtonsContainer.appendChild(infoTextBtn.element);
    textButtonsContainer.appendChild(dangerTextBtn.element);
    textButtonsContainer.appendChild(warningTextBtn.element);
    textButtonsContainer.appendChild(successTextBtn.element);
    
    container.appendChild(textButtonsContainer);
    
    // 找到类型按钮容器的父级并添加
    const typeSection = document.getElementById('typeButtons')?.parentElement;
    if (typeSection) {
        typeSection.appendChild(container);
    }
}

// 图标按钮演示
function createIconButtonsDemo(): void {
    const container = document.createElement('div');
    container.className = 'demo-item';
    container.innerHTML = '<h4>图标按钮</h4>';
    
    const iconButtonsContainer = document.createElement('div');
    iconButtonsContainer.style.display = 'flex';
    iconButtonsContainer.style.gap = '10px';
    iconButtonsContainer.style.flexWrap = 'wrap';
    iconButtonsContainer.style.alignItems = 'center';
    
    // 带图标的按钮
    const submitBtn: ButtonComponent = new Button({
        text: 'Submit',
        type: 'primary',
        variant: 'filled',
        icon: '→',
        iconPosition: 'right'
    });
    
    // 圆形图标按钮
    const iconBtn: ButtonComponent = new Button({
        text: '→',
        type: 'primary',
        variant: 'icon',
        size: 'medium',
        icon: '→',
        iconPosition: 'only'
    });
    
    iconButtonsContainer.appendChild(submitBtn.element);
    iconButtonsContainer.appendChild(iconBtn.element);
    
    container.appendChild(iconButtonsContainer);
    
    // 添加到演示区域
    const typeSection = document.getElementById('typeButtons')?.parentElement;
    if (typeSection) {
        typeSection.appendChild(container);
    }
}

// 浮动操作按钮演示
function createFloatingButtonDemo(): void {
    const container = document.createElement('div');
    container.className = 'demo-item';
    container.innerHTML = '<h4>浮动操作按钮</h4>';
    
    const floatingContainer = document.createElement('div');
    floatingContainer.style.position = 'relative';
    floatingContainer.style.height = '100px';
    floatingContainer.style.background = '#f0f0f0';
    floatingContainer.style.borderRadius = '8px';
    
    const floatingBtn: ButtonComponent = new Button({
        text: '+',
        type: 'primary',
        variant: 'floating',
        icon: '+',
        iconPosition: 'only'
    });
    
    // 修改浮动按钮的定位为相对定位用于演示
    floatingBtn.element.style.position = 'absolute';
    floatingBtn.element.style.bottom = '20px';
    floatingBtn.element.style.right = '20px';
    
    floatingContainer.appendChild(floatingBtn.element);
    container.appendChild(floatingContainer);
    
    // 添加到演示区域
    const typeSection = document.getElementById('typeButtons')?.parentElement;
    if (typeSection) {
        typeSection.appendChild(container);
    }
}


// 主题切换器
function initThemeSwitcher(): void {
    const themeSwitcherContainer = document.getElementById('themeSwitcher');
    if (!themeSwitcherContainer) return;
    
    const lightThemeBtn: ButtonComponent = new Button({
        text: '浅色主题',
        type: 'primary',
        variant: 'default',
        onClick: () => {
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark');
            showMessage('已切换到浅色主题');
        }
    });
    
    const darkThemeBtn: ButtonComponent = new Button({
        text: '深色主题',
        type: 'info',
        variant: 'default',
        onClick: () => {
            document.body.classList.add('theme-dark');
            document.body.classList.remove('theme-light');
            showMessage('已切换到深色主题');
        }
    });
    
    themeSwitcherContainer.appendChild(lightThemeBtn.element);
    themeSwitcherContainer.appendChild(darkThemeBtn.element);
}

// 显示消息提示
function showMessage(message: string): void {
    // 创建消息提示
    const messageEl: HTMLDivElement = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 12px 24px;
        background: #f0f2f5;
        color: #2c3e50;
        border-radius: 12px;
        box-shadow: 
            8px 8px 16px rgba(0, 0, 0, 0.15),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        pointer-events: none;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(messageEl);
    
    // 3秒后移除
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
}