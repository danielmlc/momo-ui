# 快速开始

本指南将帮助你快速上手 Momo UI 组件库。

## 安装

### npm 安装

```bash
npm install momo-ui
```

### CDN 引入

```html
<script src="https://unpkg.com/momo-ui@latest/dist/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/momo-ui@latest/dist/index.css">
```

## 基础使用

### 引入组件

```javascript
// ES6 模块
import { Button } from 'momo-ui';

// CommonJS
const { Button } = require('momo-ui');

// CDN 使用
const { Button } = window.MomoUI;
```

### 创建第一个按钮

```javascript
const button = new Button({
  text: '我的第一个按钮',
  type: 'primary',
  onClick: () => {
    console.log('按钮被点击了！');
  }
});

// 添加到页面
document.body.appendChild(button.element);
```

<div class="demo-container">
  <button class="neu-button neu-button--primary" onclick="console.log('按钮被点击了！')">我的第一个按钮</button>
</div>

## 样式引入

确保在你的页面中引入了 Momo UI 的样式文件：

```html
<!-- 完整样式 -->
<link rel="stylesheet" href="node_modules/momo-ui/dist/index.css">

<!-- 或者只引入按钮样式 -->
<link rel="stylesheet" href="node_modules/momo-ui/dist/components/button.css">
```

如果使用构建工具：

```javascript
// 引入所有样式
import 'momo-ui/dist/index.css';

// 或者只引入需要的组件样式
import 'momo-ui/dist/components/button.css';
```

## 完整示例

创建一个包含多个按钮的简单页面：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo UI 示例</title>
  <link rel="stylesheet" href="https://unpkg.com/momo-ui@latest/dist/index.css">
</head>
<body>
  <div id="app"></div>

  <script src="https://unpkg.com/momo-ui@latest/dist/index.js"></script>
  <script>
    const { Button } = window.MomoUI;

    // 创建按钮容器
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.gap = '12px';

    // 创建不同类型的按钮
    const buttons = [
      { text: '主要按钮', type: 'primary' },
      { text: '成功按钮', type: 'success' },
      { text: '警告按钮', type: 'warning' },
      { text: '危险按钮', type: 'danger' }
    ];

    buttons.forEach(config => {
      const btn = new Button({
        ...config,
        onClick: () => alert(`${config.text} 被点击了！`)
      });
      container.appendChild(btn.element);
    });

    document.getElementById('app').appendChild(container);
  </script>
</body>
</html>
```

<div class="demo-container">
  <button class="neu-button neu-button--primary" onclick="alert('主要按钮被点击了！')">主要按钮</button>
  <button class="neu-button neu-button--success" onclick="alert('成功按钮被点击了！')">成功按钮</button>
  <button class="neu-button neu-button--warning" onclick="alert('警告按钮被点击了！')">警告按钮</button>
  <button class="neu-button neu-button--danger" onclick="alert('危险按钮被点击了！')">危险按钮</button>
</div>

## 在框架中使用

### React 集成

```jsx
import React from 'react';
import { Button } from 'momo-ui';
import 'momo-ui/dist/index.css';

function App() {
  const handleClick = () => {
    console.log('React 中的按钮被点击！');
  };

  React.useEffect(() => {
    const button = new Button({
      text: 'React 按钮',
      type: 'primary',
      onClick: handleClick
    });

    const container = document.getElementById('momo-button-container');
    if (container) {
      container.appendChild(button.element);
    }

    return () => {
      button.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Momo UI in React</h1>
      <div id="momo-button-container"></div>
    </div>
  );
}

export default App;
```

### Vue 集成

```vue
<template>
  <div>
    <h1>Momo UI in Vue</h1>
    <div ref="buttonContainer"></div>
  </div>
</template>

<script>
import { Button } from 'momo-ui';
import 'momo-ui/dist/index.css';

export default {
  name: 'App',
  mounted() {
    const button = new Button({
      text: 'Vue 按钮',
      type: 'primary',
      onClick: () => {
        console.log('Vue 中的按钮被点击！');
      }
    });

    this.$refs.buttonContainer.appendChild(button.element);
    this.button = button;
  },
  beforeDestroy() {
    if (this.button) {
      this.button.destroy();
    }
  }
};
</script>
```

## 下一步

现在你已经成功安装并使用了 Momo UI！接下来你可以：

- 📖 浏览 [组件文档](components/) 了解更多组件
- 🎨 查看 [设计指南](design/) 了解设计理念
- 🛠️ 学习 [主题定制](guide/theming.md) 个性化你的组件
- 💡 查看 [最佳实践](guide/best-practices.md) 提升开发效率

如果你遇到任何问题，请查看 [FAQ](faq.md) 或在 GitHub 上提出 issue。