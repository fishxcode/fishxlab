# CHANGELOG

本文件是 fishxlab 的唯一发布公告来源。Web 端版本弹窗和文档站 `/docs/progress/changelog` 都读取这里。

- 准备中的变更先写到 `Unreleased`。
- 正式发版时，把 `Unreleased` 内容移动到新的 `vX.Y.Z - YYYY-MM-DD` 区块。
- 每次发版必须同步更新根目录 `VERSION`。

## Unreleased

## v0.0.2 - 2026-06-21

+ [优化] 同名模型选择体验。不同渠道或不同 API Key 下的同名模型会显示渠道序号、Base URL 和 Key 后四位，并在画布、Agent、生图工作台和视频工作台中精确路由到对应 API Key。
+ [修复] 旧数据里的裸模型名或已失效渠道模型会重新匹配当前可用渠道，避免同名模型静默调用到错误 Key。
+ [修复] 画布节点提示面板底部图像设置按钮与生成/停止按钮重叠的问题，模型名和设置文案过长时会自动截断。
+ [优化] 从已有节点拉出同类型新节点时，自动复用源节点已选择的模型，无需重新选择。

## v0.0.1 - 2026-06-20

### 版本定位

fishxlab v0.0.1 是基于 `basketikun/infinite-canvas` 的初始迁移版本。这个版本保留原项目 AGPL-3.0 授权声明和 `canvas.best` 来源标识，并把 fishxapi 用户常用能力整合到 Pro Canvas 工作台。

### 面向用户的变化

+ [新增] 无需注册登录。应用默认在浏览器中运行，用户自行配置 fishxapi 或 OpenAI 兼容接口即可使用。
+ [新增] fishxapi 一键接入。支持默认上游、URL 参数预填、API Key 粘贴、模型拉取、模型选择和本地持久化。
+ [新增] 模型图标和能力识别。模型列表会自动识别 GPT、Claude、Gemini、Grok、Doubao、Hunyuan 等模型，并显示对应图标。
+ [新增] 标准模型参数适配。覆盖 OpenAI Images、image edits、OpenAI Video 和 Grok video chat 兼容协议，`hunyuan-image-v3` 等图像模型不会错误走 chat 协议。
+ [新增] 本地数据持久化。API 配置、画布、素材、生图记录和视频记录默认保存在当前浏览器本地。

### 数据保存说明

+ 浏览器本地数据会保留到用户清理站点数据、切换浏览器、切换域名、使用无痕窗口或浏览器触发存储清理为止。
+ 这不是云端账号存储，也不能保证跨设备永久保留。
+ 长期保存建议使用画布/素材导出，或在设置中配置 WebDAV 同步。WebDAV 同步用于画布、素材和生成记录，不同步 API Key。

### 当前范围

+ 本版本只接入海外标准模型参数协议，不接入 `mj-proxy`、`koukoutu` 等非本期目标协议。
