# 常见问题

## 🚀 使用相关

### Q: 如何开始使用 Momo UI？

A: 请查看[快速开始](guide/quickstart.md)文档，包含完整的安装和使用指南。

### Q: Momo UI 支持哪些浏览器？

A: 支持所有现代浏览器：
- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

### Q: 如何自定义主题？

A: Momo UI 基于 CSS 变量构建，您可以通过覆盖 CSS 变量来自定义主题。详见[主题定制](guide/theming.md)。

### Q: 组件样式没有生效怎么办？

A: 请确保：
1. 正确引入了样式文件
2. CSS 变量设置正确
3. 没有被其他样式覆盖

## 🛠️ 开发相关

### Q: 如何参与开发？

A: 欢迎贡献！请阅读[贡献指南](contributing.md)了解详细流程。

### Q: 如何报告 Bug？

A: 请在 GitHub Issues 中提交 Bug 报告，并提供：
- 复现步骤
- 期望行为
- 实际行为
- 环境信息

### Q: 如何提出新功能建议？

A: 您可以：
1. 在 GitHub Discussions 中讨论
2. 提交 Feature Request Issue
3. 直接提交 Pull Request

## 🎨 设计相关

### Q: 什么是新拟物化设计？

A: 新拟物化（Neumorphism）是一种结合拟物化和扁平化优点的设计风格，通过微妙的阴影营造立体感。详见[设计理念](design/principles.md)。

### Q: 如何保持设计一致性？

A: 请遵循我们的设计规范：
- [颜色系统](design/colors.md)
- [阴影系统](design/shadows.md)
- [设计理念](design/principles.md)

## 📦 技术相关

### Q: 为什么选择 pnpm？

A: pnpm 提供：
- 更快的安装速度
- 更少的磁盘占用
- 更好的 monorepo 支持

### Q: 组件库的技术栈是什么？

A: 主要技术栈：
- TypeScript
- Less/CSS
- Webpack
- pnpm workspace

### Q: 如何进行类型检查？

A: 运行 `pnpm type-check` 或 `npm run type-check`

## 🔧 故障排除

### Q: 安装依赖失败

A: 请尝试：
1. 清除缓存：`pnpm store prune`
2. 删除 `node_modules` 重新安装
3. 检查网络连接和 npm 源

### Q: 构建失败

A: 请检查：
1. Node.js 版本是否符合要求
2. 依赖是否正确安装
3. TypeScript 类型是否正确

### Q: 组件不显示

A: 可能原因：
1. 样式文件未正确引入
2. CSS 变量未设置
3. JavaScript 执行出错

## 💬 获取帮助

如果以上内容没有解答您的问题，您可以：

1. 📖 查看完整文档
2. 🐛 提交 GitHub Issue
3. 💬 参与 GitHub Discussions
4. 📧 联系维护者

我们会尽快回复并提供帮助！