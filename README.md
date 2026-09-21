# 王一 · 个人主页 | Wang Yi's Homepage

个人主页网站（GitHub Pages 静态站），支持亮色/暗色主题切换与中英文语言切换。

## 站点结构

- **首页 `index.html`**：个人简介、个人项目、实习经历、校园经历、经历时间轴、专业技能、自我介绍
- **作品集 `pages/portfolio/portfolio.html`**：2026「不负四季·跃界星途」国际青少年篮球邀请赛赛事营销作品
  - 文案作品：3 篇赛事稿件（`pages/portfolio/articles/` 在线阅读 + `assets/portfolio/docs/` 原文下载）
  - 设计作品：周边信息指南、赛事包海报、冠军戒指产品图、球队巡礼系列（`assets/portfolio/images/`）
  - 视频作品：链接数据维护在 `pages/portfolio/portfolio.html` 顶部 `PF_VIDEOS` 数组
- **项目详情页 `pages/projects/project1-4.html`**：个人项目详情

## 目录

```
├── index.html                 # 主页
├── lang/                      # 中英文语言包（zh.json / en.json）
├── assets/
│   ├── css/style.css          # 全部样式（亮/暗主题变量）
│   ├── js/i18n.js             # 国际化加载
│   ├── js/main.js             # 动态渲染（项目/实习/校园/时间轴/技能/联系）
│   ├── images/                # 封面与头像
│   ├── portfolio/             # 作品集素材（docs 文档 / images 图片）
│   └── pdf/resume.pdf         # 个人简历
└── pages/
    ├── projects/project1-4.html
    └── portfolio/             # 作品集页 + 文章在线阅读页
```

## 内容维护

- 页面文案集中在 `lang/zh.json` 与 `lang/en.json`，按 `data-i18n` 键匹配；
- 首页动态板块的数据入口在 `assets/js/main.js` 顶部的 `PROJECTS`、`EXPERIENCE_ITEMS`、`CAMPUS_ITEMS`、`TIMELINE_EVENTS`、`TECH_STACK`、`CONTACT_LINKS` 数组；
- 作品集视频链接：编辑 `pages/portfolio/portfolio.html` 内 `PF_VIDEOS` 数组，填入公开链接即可显示「观看视频」按钮。

## 本地预览

```bash
python3 -m http.server 8000
# 访问 http://localhost:8000
```

## 发布

推送到 GitHub 仓库 `wangyi0830/wangyi0830.github.io` 的 `main` 分支即可自动部署。
