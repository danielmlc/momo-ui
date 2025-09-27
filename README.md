# Momo UI

一个现代化的新拟物化风格组件库，使用 TypeScript + CSS/Less 构建。

## 特性

- 🎨 新拟物化设计风格
- 📦 轻量级，无框架依赖
- 🔧 可定制的主题系统
- 📱 响应式设计
- 🚀 简单易用的 API
- 💪 完整的 TypeScript 支持
- 🛡️ 类型安全保障

## 安装

```bash
npm install momo-ui
```

## 使用

### JavaScript

```javascript
import { Button, Card, Input, Switch } from 'momo-ui';
import 'momo-ui/dist/index.css';

// 创建按钮
const button = new Button({
  text: '点击我',
  type: 'primary',
  onClick: () => console.log('按钮被点击了!')
});

document.body.appendChild(button.element);
```

### TypeScript

```typescript
import { Button, Card, Input, Switch } from 'momo-ui';
import type { ButtonComponent, ButtonOptions } from 'momo-ui';
import 'momo-ui/dist/index.css';

// 创建按钮，享受完整的类型提示
const buttonOptions: ButtonOptions = {
  text: '点击我',
  type: 'primary',
  size: 'medium',
  onClick: (event: MouseEvent) => {
    console.log('按钮被点击了!', event);
  }
};

const button: ButtonComponent = new Button(buttonOptions);
document.body.appendChild(button.element);

// 使用类型安全的方法
button.setText('新文本');
button.setLoading(true);
```

## 开发

```bash
# 安装依赖
npm install

# 类型检查
npm run type-check

# 启动开发服务器
npm run dev

# 查看演示页面
npm run demo

# 构建生产版本
npm run build
```

## 组件

### Button - 按钮组件
- 支持多种类型：primary, secondary, success, warning, error
- 多种尺寸：small, medium, large
- 状态支持：loading, disabled
- 样式变体：round, block, ghost

### Card - 卡片组件
- 可配置阴影级别：none, small, normal, large
- 支持标题、内容、底部区域
- 悬浮效果和边框样式

### Input - 输入框组件
- 多种输入类型：text, password, email, number 等
- 内嵌式设计风格
- 支持图标和后缀
- 完整的事件回调

### Switch - 开关组件
- 新拟物化切换效果
- 自定义开关文本
- 颜色主题定制
- 多种尺寸选择

## 类型定义

项目提供完整的 TypeScript 类型定义：

```typescript
// 组件选项接口
interface ButtonOptions {
  text?: string;
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: MouseEvent) => void;
}

// 组件实例接口
interface ButtonComponent {
  element: HTMLButtonElement;
  setText(text: string): void;
  setDisabled(disabled: boolean): void;
  setLoading(loading: boolean): void;
  destroy(): void;
}
```

## 主题定制

```typescript
// 支持主题切换
document.body.classList.add('theme-dark'); // 深色主题
document.body.classList.add('theme-light'); // 浅色主题
```

## 许可证

MIT