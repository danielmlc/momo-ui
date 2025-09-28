# 贡献指南

感谢您考虑为 Momo UI 做出贡献！

## 开发环境

### 环境要求
- Node.js >= 16
- pnpm >= 8.0
- Git

### 快速开始

1. **Fork 并克隆仓库**
```bash
git clone https://github.com/your-username/momo-ui.git
cd momo-ui
```

2. **安装依赖**
```bash
pnpm install
```

3. **启动开发服务器**
```bash
# 开发组件库
pnpm dev:ui

# 开发演示项目
pnpm dev:demo

# 开发文档
pnpm dev:docs
```

## 项目结构

```
momo-ui/
├── packages/
│   ├── momo-ui/       # 组件库核心
│   ├── demo/          # 演示项目
│   └── docs/          # 文档站点
├── package.json       # 根配置
└── pnpm-workspace.yaml
```

## 开发规范

### 代码风格
- 使用 TypeScript
- 遵循 ESLint 规则
- 使用 Prettier 格式化

### 组件开发
1. **目录结构**
```
src/components/ComponentName/
├── index.ts          # 导出
├── ComponentName.ts  # 主文件
├── style.less        # 样式
└── types.ts          # 类型定义
```

2. **命名规范**
- 组件名使用 PascalCase
- 文件名使用 PascalCase
- CSS 类名使用 kebab-case

3. **样式规范**
- 使用 CSS 变量
- 遵循新拟物化设计原则
- 支持主题切换

### 提交规范

使用 [Conventional Commits](https://conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**类型说明:**
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例:**
```
feat(button): add loading state
fix(input): resolve focus issue
docs: update installation guide
```

## 提交流程

1. **创建分支**
```bash
git checkout -b feature/your-feature-name
```

2. **开发和测试**
```bash
# 开发完成后运行测试
pnpm type-check
pnpm build
```

3. **提交代码**
```bash
git add .
git commit -m "feat: your feature description"
```

4. **推送并创建 PR**
```bash
git push origin feature/your-feature-name
```

## 发布流程

项目使用语义化版本：

- **patch**: 修复 bug
- **minor**: 新增功能（向后兼容）
- **major**: 破坏性更改

## 问题反馈

- 🐛 Bug 报告：使用 GitHub Issues
- 💡 功能建议：使用 GitHub Discussions
- ❓ 使用问题：查看文档或提问

## 行为准则

请阅读并遵守我们的[行为准则](CODE_OF_CONDUCT.md)。

感谢您的贡献！ 🎉