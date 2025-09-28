# Docsify 文档系统使用指南

## 🚀 快速启动

### 方法1: 使用内置服务器（推荐）
```bash
# 进入文档目录
cd docsify-docs

# 启动服务器
node serve.js

# 或者指定端口
node serve.js 8080
```

### 方法2: 使用 docsify-cli
```bash
# 全局安装 docsify-cli
npm install -g docsify-cli

# 启动服务器
docsify serve

# 指定端口
docsify serve --port 8080
```

### 方法3: 使用其他 HTTP 服务器
```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js serve
npx serve

# 使用 Live Server (VS Code 插件)
# 右键 index.html -> Open with Live Server
```

## 📁 文件结构

```
docsify-docs/
├── index.html              # Docsify 配置和入口
├── README.md               # 首页内容
├── _sidebar.md             # 侧边栏导航
├── _navbar.md              # 顶部导航
├── _coverpage.md           # 封面页
├── serve.js                # 内置服务器
├── package.json            # 项目配置
│
├── components/             # 组件文档
│   └── button.md          # Button 组件文档
│
├── guide/                  # 指南文档
│   └── quickstart.md      # 快速开始
│
└── design/                 # 设计文档
    └── principles.md      # 设计原则
```

## ✨ 功能特性

### 1. 新拟物化主题
- 自定义 CSS 样式
- 立体感视觉效果
- 与组件库风格一致

### 2. 交互式演示
- 实时代码预览
- 按钮交互效果
- 参数控制面板

### 3. 丰富的插件
- 全文搜索
- 代码复制
- 分页导航
- 语法高亮

### 4. 响应式设计
- 移动端适配
- 侧边栏折叠
- 自适应布局

## 📝 编写文档

### Markdown 语法
```markdown
# 一级标题
## 二级标题
### 三级标题

- 列表项 1
- 列表项 2

**粗体** *斜体* `代码`

```javascript
// 代码块
const button = new Button();
\```
```

### 添加交互式演示
```html
<div class="demo-container">
  <button class="neu-button neu-button--primary">演示按钮</button>
</div>
```

### 添加代码示例
````markdown
```javascript
const button = new Button({
  text: '示例按钮',
  type: 'primary',
  onClick: () => console.log('点击事件')
});
```
````

## 🛠️ 自定义配置

### 修改主题颜色
编辑 `index.html` 中的 CSS 变量：
```css
:root {
  --theme-color: #6366f1;        /* 主题色 */
  --base-background-color: #f0f0f3; /* 背景色 */
  --text-color-base: #333;        /* 文本色 */
}
```

### 添加新页面
1. 在相应目录创建 `.md` 文件
2. 在 `_sidebar.md` 中添加链接
3. 刷新页面即可看到更新

### 配置插件
在 `index.html` 的 `window.$docsify` 中添加插件配置：
```javascript
window.$docsify = {
  // 现有配置...

  // 新插件配置
  newPlugin: {
    option1: 'value1',
    option2: 'value2'
  }
};
```

## 🚀 部署指南

### GitHub Pages 部署
1. 将 `docsify-docs` 内容推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择分支和目录
4. 访问 `https://username.github.io/repository-name`

### Netlify 部署
1. 连接 GitHub 仓库
2. 设置构建命令为空（Docsify 无需构建）
3. 设置发布目录为 `docsify-docs`
4. 部署完成

### Vercel 部署
1. 导入 GitHub 项目
2. 设置根目录为 `docsify-docs`
3. 无需构建配置
4. 自动部署

## 💡 使用技巧

### 1. 热重载开发
- 修改 `.md` 文件后直接刷新页面
- CSS 修改需要刷新页面
- 不需要重启服务器

### 2. 搜索功能
- 支持全文搜索
- 搜索结果实时更新
- 支持中文搜索

### 3. 移动端适配
- 自动折叠侧边栏
- 触摸滑动支持
- 响应式布局

### 4. SEO 优化
- 设置页面标题和描述
- 添加关键词
- 配置网站图标

## 🔧 故障排除

### 常见问题

1. **页面无法加载**
   - 检查文件路径是否正确
   - 确认服务器是否正常启动
   - 查看浏览器控制台错误信息

2. **样式不生效**
   - 检查 CSS 文件路径
   - 确认样式语法正确
   - 清除浏览器缓存

3. **搜索功能异常**
   - 确认搜索插件已加载
   - 检查文档内容格式
   - 重新索引内容

### 性能优化

1. **图片优化**
   - 使用适当的图片格式
   - 压缩图片大小
   - 考虑使用 CDN

2. **加载速度**
   - 使用 CDN 加载插件
   - 减少不必要的插件
   - 优化 CSS 和 JS

## 📞 获取帮助

- 📖 [Docsify 官方文档](https://docsify.js.org)
- 🐛 [问题反馈](https://github.com/your-username/momo-ui/issues)
- 💬 [讨论区](https://github.com/your-username/momo-ui/discussions)

---

Happy documenting! 🎉