# 颜色系统

## 主色调

Momo UI 使用精心挑选的颜色系统，确保视觉一致性和可访问性。

### 基础颜色

<div class="demo-container">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
    <div style="padding: 16px; background: #6366f1; color: white; border-radius: 12px; text-align: center;">
      <strong>主题色</strong><br>
      #6366f1
    </div>
    <div style="padding: 16px; background: #8b5cf6; color: white; border-radius: 12px; text-align: center;">
      <strong>强调色</strong><br>
      #8b5cf6
    </div>
    <div style="padding: 16px; background: #f0f0f3; color: #333; border-radius: 12px; text-align: center; box-shadow: inset 2px 2px 4px #d1d1d4, inset -2px -2px 4px #ffffff;">
      <strong>背景色</strong><br>
      #f0f0f3
    </div>
  </div>
</div>

### 语义化颜色

<div class="demo-container">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
    <div style="padding: 12px; background: #10b981; color: white; border-radius: 8px; text-align: center;">
      <strong>成功</strong><br>
      #10b981
    </div>
    <div style="padding: 12px; background: #f59e0b; color: white; border-radius: 8px; text-align: center;">
      <strong>警告</strong><br>
      #f59e0b
    </div>
    <div style="padding: 12px; background: #ef4444; color: white; border-radius: 8px; text-align: center;">
      <strong>错误</strong><br>
      #ef4444
    </div>
    <div style="padding: 12px; background: #6b7280; color: white; border-radius: 8px; text-align: center;">
      <strong>信息</strong><br>
      #6b7280
    </div>
  </div>
</div>

### 文本颜色

- **主文本**: #333333
- **次要文本**: #666666
- **辅助文本**: #999999

## 阴影颜色

新拟物化设计的核心是阴影系统：

- **浅色阴影**: #ffffff (用于营造凸起感)
- **深色阴影**: #d1d1d4 (用于营造凹陷感)

## 使用规范

### 对比度要求

所有颜色组合都符合 WCAG 2.1 AA 级标准：

- 普通文本对比度 ≥ 4.5:1
- 大文本对比度 ≥ 3:1

### 颜色搭配建议

1. **背景与文本**: 使用足够的对比度确保可读性
2. **状态指示**: 使用语义化颜色表示不同状态
3. **品牌一致**: 保持主题色在整个应用中的一致使用