# GoPage

就是个简单的跳转页面，没啥花里胡哨的功能，想跳哪就跳哪 🤷‍♂️

## 能干啥

- 🚀 简单到爆，就是跳转而已
- ⚡ 快得飞起，不会卡你
- 🔧 想改配置就改配置
- 📱 手机电脑都能用
- ☁️ 丢到 Vercel 上就能跑

## 怎么用

### 在本地玩玩

1. 先把代码弄下来
```bash
git clone <your-repo-url>
cd GoPage
```

2. 装个依赖
```bash
npm install
```

3. 设置一下要跳转到哪
```bash
cp .env.example .env.local
# 打开 .env.local 文件，把 TARGET_URL 改成你想跳转的地址
```

4. 跑起来
```bash
npm start
```

然后打开 `http://localhost:3000` 就能看到了。

### 丢到 Vercel 上

1. 把代码推到 GitHub
2. 在 Vercel 里导入这个项目
3. **重要！** 在 Vercel 项目设置的 Environment Variables 里添加 `TARGET_URL` 环境变量
4. 确保 `vercel.json` 文件存在（用于路由配置）
5. 重新部署一下，就搞定了

> 💡 如果部署后出现 404 错误，检查一下环境变量是否正确设置

## 配置项

| 变量名 | 干啥用的 | 举个例子 |
|--------|----------|----------|
| `TARGET_URL` | 要跳转到哪个网站 | `https://example.com` |
| `PORT` | 端口号（不设置就是3000） | `3001` |

## 文件都是干啥的

```
GoPage/
├── api/
│   └── index.js          # Vercel 用的接口
├── lib/
│   └── template.js       # 网页模板
├── .env.example          # 配置文件模板
├── vercel.json           # Vercel 部署配置
├── package.json          # 项目信息
└── server.js            # 本地服务器
```

## 用了啥技术

- Node.js（后端）
- Express.js（服务器框架）
- Vercel（部署平台，免费的）

## 开源协议

使用 WTFPL 协议，简单来说就是：**想干啥就干啥，别问我** 🤷‍♂️

详细协议内容请查看 [LICENSE](LICENSE) 文件。