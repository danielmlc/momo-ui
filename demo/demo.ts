// 导入组件库
import { Button, Card, Input, Switch } from '../src/index';
import type { ButtonComponent, CardComponent, InputComponent, SwitchComponent } from '../src/types';

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function(): void {
    // 初始化所有演示组件
    initButtonDemo();
    initInputDemo();
    initSwitchDemo();
    initCardDemo();
    initThemeSwitcher();
});

// 按钮演示
function initButtonDemo(): void {
    // 基础按钮
    const basicButtonsContainer = document.getElementById('basicButtons');
    if (!basicButtonsContainer) return;
    
    const primaryBtn: ButtonComponent = new Button({
        text: '主要按钮',
        type: 'primary',
        onClick: () => showMessage('主要按钮被点击了！')
    });
    
    const secondaryBtn: ButtonComponent = new Button({
        text: '次要按钮',
        type: 'secondary',
        onClick: () => showMessage('次要按钮被点击了！')
    });
    
    basicButtonsContainer.appendChild(primaryBtn.element);
    basicButtonsContainer.appendChild(secondaryBtn.element);
    
    // 不同尺寸的按钮
    const sizeButtonsContainer = document.getElementById('sizeButtons');
    if (!sizeButtonsContainer) return;
    
    const smallBtn: ButtonComponent = new Button({
        text: '小按钮',
        size: 'small'
    });
    
    const mediumBtn: ButtonComponent = new Button({
        text: '中等按钮',
        size: 'medium'
    });
    
    const largeBtn: ButtonComponent = new Button({
        text: '大按钮',
        size: 'large'
    });
    
    sizeButtonsContainer.appendChild(smallBtn.element);
    sizeButtonsContainer.appendChild(mediumBtn.element);
    sizeButtonsContainer.appendChild(largeBtn.element);
    
    // 不同类型的按钮
    const typeButtonsContainer = document.getElementById('typeButtons');
    if (!typeButtonsContainer) return;
    
    const successBtn: ButtonComponent = new Button({
        text: '成功',
        type: 'success'
    });
    
    const warningBtn: ButtonComponent = new Button({
        text: '警告',
        type: 'warning'
    });
    
    const errorBtn: ButtonComponent = new Button({
        text: '错误',
        type: 'error'
    });
    
    typeButtonsContainer.appendChild(successBtn.element);
    typeButtonsContainer.appendChild(warningBtn.element);
    typeButtonsContainer.appendChild(errorBtn.element);
    
    // 特殊状态按钮
    const stateButtonsContainer = document.getElementById('stateButtons');
    if (!stateButtonsContainer) return;
    
    const disabledBtn: ButtonComponent = new Button({
        text: '禁用按钮',
        disabled: true
    });
    
    const loadingBtn: ButtonComponent = new Button({
        text: '加载中',
        loading: true
    });
    
    stateButtonsContainer.appendChild(disabledBtn.element);
    stateButtonsContainer.appendChild(loadingBtn.element);
}

// 输入框演示
function initInputDemo(): void {
    // 基础输入框
    const basicInputsContainer = document.getElementById('basicInputs');
    if (!basicInputsContainer) return;
    
    const textInput: InputComponent = new Input({
        type: 'text',
        placeholder: '请输入文本'
    });
    
    const passwordInput: InputComponent = new Input({
        type: 'password',
        placeholder: '请输入密码'
    });
    
    basicInputsContainer.appendChild(textInput.element);
    basicInputsContainer.appendChild(passwordInput.element);
    
    // 不同尺寸的输入框
    const sizeInputsContainer = document.getElementById('sizeInputs');
    if (!sizeInputsContainer) return;
    
    const smallInput: InputComponent = new Input({
        size: 'small',
        placeholder: '小输入框'
    });
    
    const mediumInput: InputComponent = new Input({
        size: 'medium',
        placeholder: '中等输入框'
    });
    
    const largeInput: InputComponent = new Input({
        size: 'large',
        placeholder: '大输入框'
    });
    
    sizeInputsContainer.appendChild(smallInput.element);
    sizeInputsContainer.appendChild(mediumInput.element);
    sizeInputsContainer.appendChild(largeInput.element);
}

// 开关演示
function initSwitchDemo(): void {
    // 基础开关
    const basicSwitchesContainer = document.getElementById('basicSwitches');
    if (!basicSwitchesContainer) return;
    
    const basicSwitch: SwitchComponent = new Switch({
        checked: false,
        onChange: (checked: boolean) => showMessage(`开关状态: ${checked ? '开启' : '关闭'}`)
    });
    
    const checkedSwitch: SwitchComponent = new Switch({
        checked: true,
        onChange: (checked: boolean) => showMessage(`开关状态: ${checked ? '开启' : '关闭'}`)
    });
    
    basicSwitchesContainer.appendChild(basicSwitch.element);
    basicSwitchesContainer.appendChild(checkedSwitch.element);
    
    // 不同尺寸的开关
    const sizeSwitchesContainer = document.getElementById('sizeSwitches');
    if (!sizeSwitchesContainer) return;
    
    const smallSwitch: SwitchComponent = new Switch({
        size: 'small',
        checkedText: '开',
        uncheckedText: '关'
    });
    
    const mediumSwitch: SwitchComponent = new Switch({
        size: 'medium',
        checkedText: '开启',
        uncheckedText: '关闭'
    });
    
    const largeSwitch: SwitchComponent = new Switch({
        size: 'large',
        checkedText: '开启',
        uncheckedText: '关闭'
    });
    
    sizeSwitchesContainer.appendChild(smallSwitch.element);
    sizeSwitchesContainer.appendChild(mediumSwitch.element);
    sizeSwitchesContainer.appendChild(largeSwitch.element);
}

// 卡片演示
function initCardDemo(): void {
    // 基础卡片
    const basicCardsContainer = document.getElementById('basicCards');
    if (!basicCardsContainer) return;
    
    const basicCard: CardComponent = new Card({
        title: '基础卡片',
        content: '<p>这是一个基础的新拟物化卡片组件，具有柔和的阴影效果。</p>',
        footer: '卡片底部信息'
    });
    
    basicCardsContainer.appendChild(basicCard.element);
    
    // 不同阴影的卡片
    const shadowCardsContainer = document.getElementById('shadowCards');
    if (!shadowCardsContainer) return;
    
    const smallShadowCard: CardComponent = new Card({
        title: '轻微阴影',
        content: '<p>这是一个轻微阴影的卡片。</p>',
        shadow: 'small'
    });
    
    const normalShadowCard: CardComponent = new Card({
        title: '正常阴影',
        content: '<p>这是一个正常阴影的卡片。</p>',
        shadow: 'normal'
    });
    
    const largeShadowCard: CardComponent = new Card({
        title: '强烈阴影',
        content: '<p>这是一个强烈阴影的卡片。</p>',
        shadow: 'large'
    });
    
    shadowCardsContainer.appendChild(smallShadowCard.element);
    shadowCardsContainer.appendChild(normalShadowCard.element);
    shadowCardsContainer.appendChild(largeShadowCard.element);
}

// 主题切换器
function initThemeSwitcher(): void {
    const themeSwitcherContainer = document.getElementById('themeSwitcher');
    if (!themeSwitcherContainer) return;
    
    const themeSwitch: SwitchComponent = new Switch({
        size: 'large',
        checkedText: '深色',
        uncheckedText: '浅色',
        onChange: (checked: boolean) => {
            if (checked) {
                document.body.classList.add('theme-dark');
                document.body.classList.remove('theme-light');
            } else {
                document.body.classList.add('theme-light');
                document.body.classList.remove('theme-dark');
            }
            showMessage(`已切换到${checked ? '深色' : '浅色'}主题`);
        }
    });
    
    themeSwitcherContainer.appendChild(themeSwitch.element);
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