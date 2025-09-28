# Button 按钮

Button 组件是用户界面中最基础和重要的交互元素之一。Momo UI 的 Button 组件基于新拟物化设计理念，提供了立体感强烈的视觉效果和流畅的交互体验。

## 基础用法

最简单的按钮用法：

```javascript
const button = new Button({
  text: 'Hello World',
  onClick: () => {
    alert('按钮被点击了！');
  }
});

document.body.appendChild(button.element);
```

<div class="demo-container">
  <button class="neu-button" onclick="alert('Hello World!')">Hello World</button>
</div>

## 按钮状态

按钮支持四种基本状态：默认、悬停、按下和禁用。

```javascript
// 默认状态
const defaultBtn = new Button({ text: 'Default' });

// 禁用状态
const disabledBtn = new Button({
  text: 'Disabled',
  disabled: true
});

// 加载状态
const loadingBtn = new Button({
  text: 'Loading',
  loading: true
});
```

<div class="demo-container">
  <button class="neu-button">Default</button>
  <button class="neu-button" disabled style="opacity: 0.5;">Disabled</button>
  <button class="neu-button">Loading...</button>
</div>

## 按钮尺寸

提供三种尺寸：小(small)、中(medium)、大(large)。

```javascript
const smallBtn = new Button({ text: 'Small', size: 'small' });
const mediumBtn = new Button({ text: 'Medium', size: 'medium' });
const largeBtn = new Button({ text: 'Large', size: 'large' });
```

<div class="demo-container">
  <button class="neu-button neu-button--small">Small</button>
  <button class="neu-button">Medium</button>
  <button class="neu-button neu-button--large">Large</button>
</div>

## 按钮类型

### 填充按钮

填充按钮适用于主要操作，提供强烈的视觉焦点。

```javascript
const primaryBtn = new Button({
  text: 'Primary',
  type: 'primary'
});

const successBtn = new Button({
  text: 'Success',
  type: 'success'
});

const warningBtn = new Button({
  text: 'Warning',
  type: 'warning'
});

const dangerBtn = new Button({
  text: 'Danger',
  type: 'danger'
});
```

<div class="demo-container">
  <button class="neu-button neu-button--primary">Primary</button>
  <button class="neu-button neu-button--success">Success</button>
  <button class="neu-button neu-button--warning">Warning</button>
  <button class="neu-button neu-button--danger">Danger</button>
</div>

## 带图标的按钮

按钮可以包含图标，支持左侧、右侧位置，以及仅图标模式。

```javascript
// 左侧图标
const leftIconBtn = new Button({
  text: 'Download',
  icon: '⬇️',
  iconPosition: 'left'
});

// 右侧图标
const rightIconBtn = new Button({
  text: 'Next',
  icon: '→',
  iconPosition: 'right'
});

// 仅图标
const iconOnlyBtn = new Button({
  icon: '❤️',
  iconPosition: 'only'
});
```

<div class="demo-container">
  <button class="neu-button neu-button--primary">⬇️ Download</button>
  <button class="neu-button neu-button--primary">Next →</button>
  <button class="neu-button neu-button--primary">❤️</button>
</div>

## 交互式演示

<div id="interactive-demo">
  <div class="demo-container" id="demo-preview">
    <button class="neu-button neu-button--primary" id="demo-button">Interactive Button</button>
  </div>

  <div style="margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 12px;">
    <h4>控制面板</h4>

    <div style="margin: 10px 0;">
      <label>文本: </label>
      <input type="text" id="btn-text" value="Interactive Button" style="padding: 8px; border-radius: 6px; border: 1px solid #ddd;">
    </div>

    <div style="margin: 10px 0;">
      <label>类型: </label>
      <select id="btn-type" style="padding: 8px; border-radius: 6px; border: 1px solid #ddd;">
        <option value="default">Default</option>
        <option value="primary" selected>Primary</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
      </select>
    </div>

    <div style="margin: 10px 0;">
      <label>尺寸: </label>
      <select id="btn-size" style="padding: 8px; border-radius: 6px; border: 1px solid #ddd;">
        <option value="small">Small</option>
        <option value="medium" selected>Medium</option>
        <option value="large">Large</option>
      </select>
    </div>

    <div style="margin: 10px 0;">
      <label>
        <input type="checkbox" id="btn-disabled"> 禁用
      </label>
    </div>
  </div>
</div>

<script>
(function() {
  const demoButton = document.getElementById('demo-button');
  const textInput = document.getElementById('btn-text');
  const typeSelect = document.getElementById('btn-type');
  const sizeSelect = document.getElementById('btn-size');
  const disabledCheck = document.getElementById('btn-disabled');

  function updateButton() {
    if (!demoButton) return;

    // 更新文本
    demoButton.textContent = textInput.value;

    // 重置类名
    demoButton.className = 'neu-button';

    // 添加类型类名
    if (typeSelect.value !== 'default') {
      demoButton.classList.add(`neu-button--${typeSelect.value}`);
    }

    // 添加尺寸类名
    if (sizeSelect.value !== 'medium') {
      demoButton.classList.add(`neu-button--${sizeSelect.value}`);
    }

    // 设置禁用状态
    demoButton.disabled = disabledCheck.checked;
    demoButton.style.opacity = disabledCheck.checked ? '0.5' : '1';
  }

  // 绑定事件
  if (textInput) textInput.addEventListener('input', updateButton);
  if (typeSelect) typeSelect.addEventListener('change', updateButton);
  if (sizeSelect) sizeSelect.addEventListener('change', updateButton);
  if (disabledCheck) disabledCheck.addEventListener('change', updateButton);

  // 初始化
  updateButton();
})();
</script>

## API 参考

### ButtonOptions

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `string` | `'按钮'` | 按钮显示的文本内容 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | 按钮的语义类型 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用按钮 |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `block` | `boolean` | `false` | 是否为块级按钮 |
| `icon` | `string \| HTMLElement` | `''` | 按钮图标 |
| `iconPosition` | `'left' \| 'right' \| 'only'` | `'left'` | 图标位置 |
| `onClick` | `(event: MouseEvent) => void` | `null` | 点击事件回调 |

### 实例方法

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setText(text)` | `text: string` | `void` | 设置按钮文本 |
| `setDisabled(disabled)` | `disabled: boolean` | `void` | 设置禁用状态 |
| `setLoading(loading)` | `loading: boolean` | `void` | 设置加载状态 |
| `setType(type)` | `type: ButtonType` | `void` | 设置按钮类型 |
| `setSize(size)` | `size: Size` | `void` | 设置按钮尺寸 |
| `focus()` | - | `void` | 使按钮获得焦点 |
| `click()` | - | `void` | 触发按钮点击 |
| `destroy()` | - | `void` | 销毁按钮实例 |

## 完整示例

### 表单操作按钮组

```javascript
// 创建表单按钮组
const formButtons = document.createElement('div');
formButtons.style.display = 'flex';
formButtons.style.gap = '12px';

const submitBtn = new Button({
  text: '提交',
  type: 'primary',
  onClick: () => alert('表单已提交！')
});

const resetBtn = new Button({
  text: '重置',
  type: 'warning',
  onClick: () => alert('表单已重置！')
});

const cancelBtn = new Button({
  text: '取消',
  onClick: () => alert('操作已取消！')
});

formButtons.appendChild(submitBtn.element);
formButtons.appendChild(resetBtn.element);
formButtons.appendChild(cancelBtn.element);

document.body.appendChild(formButtons);
```

<div class="demo-container">
  <button class="neu-button neu-button--primary" onclick="alert('表单已提交！')">提交</button>
  <button class="neu-button neu-button--warning" onclick="alert('表单已重置！')">重置</button>
  <button class="neu-button" onclick="alert('操作已取消！')">取消</button>
</div>

### 操作确认对话框

```javascript
const deleteBtn = new Button({
  text: '删除数据',
  type: 'danger',
  icon: '🗑️',
  onClick: function() {
    if (confirm('确定要删除这些数据吗？此操作不可恢复。')) {
      this.setLoading(true);
      this.setText('删除中...');

      setTimeout(() => {
        this.setLoading(false);
        this.setText('已删除');
        this.setDisabled(true);
      }, 2000);
    }
  }
});
```

<div class="demo-container">
  <button class="neu-button neu-button--danger" onclick="
    if (confirm('确定要删除这些数据吗？此操作不可恢复。')) {
      this.textContent = '删除中...';
      this.disabled = true;
      setTimeout(() => {
        this.textContent = '已删除';
      }, 2000);
    }
  ">🗑️ 删除数据</button>
</div>

## 设计指南

### 使用建议

1. **主要操作** - 使用 `primary` 类型突出重要操作
2. **危险操作** - 使用 `danger` 类型标识有风险的操作
3. **成功反馈** - 使用 `success` 类型显示成功状态
4. **警告提示** - 使用 `warning` 类型显示需要注意的操作

### 布局建议

- 相关按钮应该分组放置
- 主要操作按钮应该放在右侧或底部
- 保持按钮之间适当的间距（建议12px）
- 在移动设备上考虑使用块级按钮

### 可访问性

- 提供清晰的按钮标签
- 确保足够的对比度
- 支持键盘导航
- 为图标按钮提供 `aria-label` 属性