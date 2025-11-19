# CoverView

👉 封面生成说明 |


该项目基于 [Lruihao/CoverView](https://github.com/Lruihao/CoverView) 汉化版开发，其设计风格（高斯模糊背景 + 漂浮文字+自定义上传图片）非常契合博客场景。借助 Unsplash API，可直接搜索海量无版权摄影作品，极大提升了找图效率。该项目基于原始的 [CoverView](https://github.com/rutikwankhade/CoverView) 




现在为你的博客创建封面图片变得非常简单。

![首页](https://github.com/RunWang925/coverview-zh/blob/master/assets/images/首页.png) 
![页面](https://github.com/RunWang925/coverview-zh/blob/master/assets/images/页面.png) 

*示例：部署CoverView后效果*


## ✨ 功能优化

在原项目基础上，本分支主要做了以下调整：
1. 精简首页结构，移除冗余页面，聚焦核心功能
2. 底部新增版权信息与"关于本站"入口，支持自定义跳转链接
3. 实现配置集中化管理：所有可自定义的文字（标题、版权信息等）和链接均统一维护在 `config.ts` 中，修改无需改动业务代码


## 🔧 配置说明

所有可自定义内容均在根目录 `config.ts` 中维护，主要包括：
- 页面标题、头部文字等展示文本
- 底部版权所有者、跳转链接
- "关于本站"文字及链接
- GitHub仓库地址等
![config](https://github.com/RunWang925/coverview-zh/blob/master/assets/images/config.png) 

示例配置片段：
```typescript
// config.ts 关键配置示例
export default {
  headerTitle: "自定义封面生成",       // 头部标题
  copyrightOwner: "你的名称",          // 版权所有者
  ownerUrl: "https://你的网站",        // 所有者链接
  githubRepoUrl: "https://你的仓库地址" // 项目仓库链接
  // 更多配置详见文件
};
```


## 📦 API 说明

项目依赖 Unsplash API 提供图片资源，使用前需注意：

1. 需在环境变量中配置 `REACT_APP_UNSPLASH_ACCESS_KEY`（支持通过 `.env` 或系统环境变量设置）
2. API 调用限制：Unsplash 免费计划默认**每小时最多 50 次请求**，超过限制会导致图片加载失败
3. 若无需图片功能或遇到限制，可在代码中注释相关调用逻辑

## 🚀 部署方式

支持多种现代化部署平台：

- Vercel
- Cloudflare Pages
- EdgeOne Pages
- 其他支持静态站点部署的平台


## 🔑 API 配置（必看）

项目依赖 Unsplash API 实现图片搜索功能，需先配置环境变量：

1. **获取 API 密钥**

   访问 [Unsplash Developers](https://unsplash.com/developers)，按以下步骤操作：

   - 右上角注册账号并登录
   - 点击「New Application」创建应用
   - 进入应用详情页，获取 `Access Key` 

2. **配置环境变量**

   部署时需填入以下环境变量：

   - `REACT_APP_UNSPLASH_ACCESS_KEY`：对应 Unsplash 的 `Access Key`

## 修改和上传
1. **仓库拉取下载本地**

   将远程仓库 https://github.com/RunWang925/coverview-zh 拉取到本地，完整 Git 命令是：
   ```
   git clone https://github.com/RunWang925/coverview-zh.git #库地址替换自己地址
   ```
   通常情况下，从 GitHub 克隆前端项目后，本地预览的步骤如下（假设项目使用 npm 管理依赖）：
   首先进入项目目录：

   ```
   cd coverview-zh  # 进入克隆下来的项目文件夹
   ```
   安装依赖（首次拉取项目必须执行，确保依赖完整）：
   ```
   npm install #更新依赖
   ```
   启动本地预览服务
   ```
   npm run dev #本地预览http://localhost:5173
   ```
2. **修改后上传**

   查看修改状态（可选，但推荐，确认修改内容）：
   ```
   git status # 会显示哪些文件被修改、新增或删除。
   ```
  
   将修改添加到暂存区：
   ```
   git add .  #添加所有修改（包括新增、修改、删除的文件）：
   ```
   提交暂存区的修改到本地仓库：
   ```
   git commit -m "说明描述" #例如：修复了XXbug / 添加了XX功能
   ```
   推送到远程仓库：
   ```
   git push origin master # 默认分支是 master（旧版本 GitHub 常用）新版 main
   ```

## 🌟 项目价值与致谢

感谢以下贡献者：

- [Rutik Wankhade](https://github.com/rutikwankhade)（原始 CoverView 项目）
- [Lruihao](https://github.com/Lruihao)（CoverView 汉化版本）
- [willow-god](https://github.com/willow-god)（~~抄~~参清羽飞扬版本的优化思路）
- Unsplash 社区的摄影师们（提供无版权优质图片资源）

如果你觉得这个项目有用，请别忘了留下一个 ⭐！
