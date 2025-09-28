# 主题定制

Momo UI 基于 CSS 自定义属性（CSS Variables）提供了强大的主题定制能力。

## 默认主题变量

```css
:root {
  /* 新拟物化颜色 */
  --base-background-color: #f0f0f3;
  --base-color: #333;
  --theme-color: #6366f1;
  --accent-color: #8b5cf6;

  /* 阴影颜色 */
  --shadow-light: #ffffff;
  --shadow-dark: #d1d1d4;

  /* 文本颜色 */
  --text-color-base: #333;
  --text-color-secondary: #666;
  --text-color-tertiary: #999;
}
```

## 暗色主题

```css
[data-theme="dark"] {
  --base-background-color: #2a2d3a;
  --base-color: #ffffff;
  --shadow-light: #363a4a;
  --shadow-dark: #1e202a;
  --text-color-base: #ffffff;
  --text-color-secondary: #b0b3b8;
  --text-color-tertiary: #8a8b8f;
}
```

## 自定义主题

您可以通过覆盖 CSS 变量来创建自定义主题：

```css
.my-theme {
  --theme-color: #ff6b6b;
  --accent-color: #feca57;
  --base-background-color: #f8f9fa;
}
```

## 动态切换主题

```javascript
// 切换到暗色主题
document.documentElement.setAttribute('data-theme', 'dark');

// 切换到浅色主题
document.documentElement.removeAttribute('data-theme');
```