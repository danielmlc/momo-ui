# 阴影系统

阴影是新拟物化设计的核心元素，用于创造深度感和立体感。

## 阴影层级

### 基础阴影
用于普通组件的默认状态：

```css
box-shadow: 5px 5px 10px #d1d1d4, -5px -5px 10px #ffffff;
```

<div class="demo-container">
  <div style="width: 100px; height: 60px; background: #f0f0f3; border-radius: 12px; box-shadow: 5px 5px 10px #d1d1d4, -5px -5px 10px #ffffff;"></div>
</div>

### 悬浮阴影
用于交互组件的悬浮状态：

```css
box-shadow: 2px 2px 5px #d1d1d4, -2px -2px 5px #ffffff;
```

<div class="demo-container">
  <div style="width: 100px; height: 60px; background: #f0f0f3; border-radius: 12px; box-shadow: 2px 2px 5px #d1d1d4, -2px -2px 5px #ffffff;"></div>
</div>

### 按压阴影
用于按钮的激活状态：

```css
box-shadow: inset 2px 2px 5px #d1d1d4, inset -2px -2px 5px #ffffff;
```

<div class="demo-container">
  <div style="width: 100px; height: 60px; background: #f0f0f3; border-radius: 12px; box-shadow: inset 2px 2px 5px #d1d1d4, inset -2px -2px 5px #ffffff;"></div>
</div>

## 阴影参数

### 偏移量
- **X 轴偏移**: 通常为 2px-8px
- **Y 轴偏移**: 与 X 轴偏移相同
- **对称设计**: 正负值对称使用

### 模糊半径
- **近距离**: 5px (悬浮状态)
- **中距离**: 10px (默认状态)
- **远距离**: 15px-20px (高层级组件)

### 颜色选择
- **浅色阴影**: 使用纯白色或接近白色
- **深色阴影**: 使用比背景色稍深的颜色

## 使用指南

### 状态变化
通过阴影变化来表示组件状态：

1. **默认**: 中等阴影
2. **悬浮**: 较小阴影，营造接近感
3. **激活**: 内阴影，营造按压感
4. **禁用**: 减淡阴影或去除阴影

### 层级表示
使用不同强度的阴影来表示组件层级：

- **背景**: 无阴影
- **卡片**: 基础阴影
- **浮层**: 较强阴影
- **模态框**: 最强阴影

### 性能考虑
- 避免过多复杂阴影影响性能
- 使用 CSS 变量便于主题切换
- 考虑在低端设备上简化阴影效果