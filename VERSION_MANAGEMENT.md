# 📋 版本管理指南

本项目使用了先进的自动化版本管理系统，结合了 **Semantic Release** 和 **Release Drafter** 两个强大的工具，为您提供完整的版本控制和发布说明生成功能。

## 🚀 功能特性

### 1. Semantic Release
- **自动版本号管理**：根据提交信息自动确定版本号（major/minor/patch）
- **自动生成 CHANGELOG**：基于提交历史生成详细的变更日志
- **自动发布到 NPM**：支持自动发布包到 NPM 仓库
- **GitHub Release**：自动创建 GitHub Release 并附带发布说明

### 2. Release Drafter
- **PR 驱动的发布草稿**：每当 PR 合并时自动更新发布草稿
- **智能分类**：根据标签自动将变更分类到不同章节
- **自动标签**：根据 PR 标题和文件变更自动添加标签
- **贡献者统计**：自动统计和感谢贡献者

## 📝 提交信息规范

本项目遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

### 基本格式
```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

### 支持的类型

| 类型 | 版本影响 | 说明 | 示例 |
|------|----------|------|------|
| `feat` | minor | 新功能 | `feat: 添加用户登录功能` |
| `fix` | patch | Bug 修复 | `fix: 修复登录页面样式问题` |
| `docs` | patch | 文档更新 | `docs: 更新 API 文档` |
| `style` | patch | 样式改进 | `style: 优化按钮样式` |
| `refactor` | patch | 代码重构 | `refactor: 重构用户模块` |
| `perf` | patch | 性能优化 | `perf: 优化数据库查询性能` |
| `test` | patch | 测试相关 | `test: 添加用户模块单元测试` |
| `build` | patch | 构建系统 | `build: 更新 webpack 配置` |
| `ci` | patch | 持续集成 | `ci: 更新 GitHub Actions 配置` |
| `chore` | 无 | 其他杂项 | `chore: 更新依赖包` |

### 破坏性更改
对于包含破坏性更改的提交，需要在类型后添加 `!` 或在脚注中添加 `BREAKING CHANGE:`：

```bash
# 方式1：在类型后添加 !
feat!: 重构 API 接口

# 方式2：在脚注中说明
feat: 重构用户认证系统

BREAKING CHANGE: 用户认证接口发生重大变更，需要更新客户端代码
```

## 🏷️ PR 标签系统

### 自动标签
系统会根据 PR 标题和文件变更自动添加标签：

- **功能类**：`feature`, `enhancement`, `新功能`
- **修复类**：`bug`, `fix`, `bugfix`, `修复`
- **文档类**：`documentation`, `docs`, `文档`
- **样式类**：`style`, `ui`, `ux`, `样式`
- **性能类**：`performance`, `perf`, `性能`
- **维护类**：`maintenance`, `chore`, `refactor`, `重构`
- **测试类**：`test`, `testing`, `测试`
- **安全类**：`security`, `安全`

### 版本控制标签
用于控制版本号递增：

- `major` - 主版本号递增（破坏性更改）
- `minor` - 次版本号递增（新功能）
- `patch` - 修订版本号递增（Bug 修复）

### 特殊标签
- `skip-changelog` - 跳过变更日志
- `dependencies` - 依赖更新（通常不显示在发布说明中）

## 🔄 工作流程

### 1. 开发流程
1. 创建功能分支
2. 按照规范编写提交信息
3. 创建 Pull Request
4. 系统自动添加标签和更新发布草稿
5. 代码审查和合并

### 2. 发布流程
1. 代码合并到 `main` 分支
2. **Semantic Release** 自动分析提交历史
3. 自动确定版本号并生成 CHANGELOG
4. 创建 Git 标签和 GitHub Release
5. **Release Drafter** 更新发布草稿

## 📊 发布说明示例

生成的发布说明将包含以下内容：

```markdown
# v2.4.0 🚀

## 📋 更新内容

### 🚀 新功能
- 添加用户认证系统 @nowscott (#123)
- 支持多语言切换 @contributor (#124)

### 🐛 Bug 修复
- 修复登录页面样式问题 @nowscott (#125)
- 解决移动端兼容性问题 @contributor (#126)

### 📚 文档更新
- 更新 API 文档 @nowscott (#127)
- 添加部署指南 @contributor (#128)

## 👥 贡献者

感谢以下贡献者的努力：@nowscott, @contributor

---

**完整变更日志**: https://github.com/owner/repo/compare/v2.3.1...v2.4.0
```

## 🛠️ 配置文件说明

- **`.github/workflows/version-bump.yml`** - GitHub Actions 工作流配置
- **`.github/release-drafter.yml`** - Release Drafter 配置
- **`.releaserc.json`** - Semantic Release 配置
- **`package.json`** - 项目依赖和脚本配置

## 🎯 最佳实践

1. **提交信息要清晰**：使用规范的提交信息格式
2. **合理使用标签**：为 PR 添加合适的标签
3. **及时更新文档**：重要变更要同步更新文档
4. **测试充分**：确保代码质量
5. **版本规划**：合理规划版本发布节奏

## 🔗 相关链接

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Release Drafter](https://github.com/release-drafter/release-drafter)

---

通过这套完整的版本管理系统，您可以专注于代码开发，而版本发布和文档生成将完全自动化处理！ 🎉