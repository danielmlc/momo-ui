# Momo UI

> 现代化新拟物化风格组件库

一个基于新拟物化(Neumorphism)设计理念的现代化组件库，提供立体感强烈的视觉效果和流畅的交互体验。

## ✨ 特性

- 🎨 **新拟物化设计** - 独特的立体视觉效果
- 🛠️ **TypeScript** - 完整的类型定义支持
- 📱 **响应式** - 适配各种设备尺寸
- 🎯 **易用性** - 简洁直观的API设计
- 🔧 **可定制** - 灵活的主题配置
- 📦 **轻量级** - 优化的包体积

## 🚀 快速开始

### 安装

```bash
npm install momo-ui
```

### 基础使用

```javascript
import { Button } from 'momo-ui';

// 创建一个按钮
const button = new Button({
  text: 'Hello Momo UI',
  type: 'primary',
  onClick: () => {
    console.log('按钮被点击了！');
  }
});

// 添加到页面
document.body.appendChild(button.element);
```

## 📖 组件文档

### 基础组件

- [Button 按钮](components/button.md) - 各种状态和样式的按钮组件
- [Input 输入框](components/input.md) - 数据输入组件 *(即将推出)*
- [Switch 开关](components/switch.md) - 开关选择组件 *(即将推出)*

### 高级组件

- [Modal 模态框](components/modal.md) - 弹窗组件 *(即将推出)*
- [Tooltip 提示](components/tooltip.md) - 文字提示组件 *(即将推出)*

## 🎨 设计理念

Momo UI 采用新拟物化(Neumorphism)设计风格，这是一种将拟物化和扁平化设计相结合的现代设计语言。通过巧妙的光影效果，创造出仿佛从背景中浮出的立体感，为用户提供更加直观和愉悦的交互体验。

### 设计原则

1. **一致性** - 统一的视觉语言和交互模式
2. **可识别性** - 清晰的层次结构和状态反馈
3. **简洁性** - 去除不必要的装饰，专注功能本身
4. **可访问性** - 考虑不同用户群体的使用需求

## 🛠️ 开发

### 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/momo-ui.git

# 安装依赖
cd momo-ui
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 类型检查
npm run type-check
```

### 目录结构

```
momo-ui/
├── src/                    # 源代码
│   ├── components/         # 组件目录
│   │   └── Button/        # Button 组件
│   ├── styles/            # 样式文件
│   ├── types/             # 类型定义
│   └── utils/             # 工具函数
├── docs/                  # 文档
├── demo/                  # 演示页面
├── design/                # 设计稿
└── dist/                  # 构建输出
```

## 📄 许可证

[MIT License](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

请阅读 [贡献指南](CONTRIBUTING.md) 了解详细信息。

## 💬 社区

- 🐛 [报告问题](https://github.com/your-username/momo-ui/issues)
- 💡 [功能建议](https://github.com/your-username/momo-ui/issues)
- 📚 [使用文档](https://your-username.github.io/momo-ui)

---

Made with ❤️ by Momo UI Team