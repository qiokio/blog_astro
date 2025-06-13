---
title: '入门指南'
pubDate: 2025-05-05
description: 'Litos主题的全面入门指南'
recommend: true
tags: ['教程']
heroImage: 'Getting-Started.webp'
ogImage: 'Getting-Started.webp'
---

欢迎使用 **[Litos Theme](https://github.com/Dnzzk2/Litos)**！这份全面的指南将带您完成使用Litos（一个基于Astro.js构建的现代博客主题）设置和启动项目的过程。

## 前提条件

在开始之前，请确保您的开发环境中已安装以下工具：

- :link[Node.js]{id=https://nodejs.org/en/download} - 运行开发环境所必需的
- :link[pnpm]{id=https://pnpm.io/installation} - 我们首选的依赖管理包管理器
- :link[Git]{id=https://git-scm.com/} - 用于版本控制和项目管理
- :link[VS Code]{id=https://code.visualstudio.com/} - 推荐的代码编辑器，提供出色的开发体验

> [!tip]
> 虽然推荐使用VS Code，但您可以使用任何支持Web开发的代码编辑器。

## 项目设置

### 创建您的项目

您可以通过fork仓库开始您的Litos项目：

1. 访问[Litos Theme仓库](https://github.com/Dnzzk2/Litos)
2. 点击"Fork"按钮创建您的副本
3. 在本地克隆您fork的仓库：

```bash
git clone https://github.com/[您的用户名]/[您的仓库名].git
cd [您的仓库名]
```

### 安装依赖

克隆仓库后，安装项目依赖：

```bash
# 安装所有必需的依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 项目配置

在定制您的网站之前，请先熟悉[项目结构](/posts/project-structure)。有三个主要的配置区域需要关注：

1. **基本网站配置**
   - 文件：`src/config.ts`
   - 用途：配置网站元数据、导航和核心设置
   - 了解更多：[基本配置指南](/posts/basic-configuration)

2. **代码块样式**
   - 文件：`ec.config.mjs`
   - 用途：自定义代码块的外观和行为
   - 了解更多：[ExpressiveCode配置](/posts/expressivecode-configuration)

3. **Markdown扩展**
   - 文件：`/plugins/index.ts`
   - 用途：配置Markdown插件和扩展
   - 了解更多：[Markdown扩展语法](/posts/markdown-extension-syntax)

## 内容创建

Litos支持标准Markdown和增强语法功能：

- [基本Markdown语法](/posts/markdown-syntax-guide) - 核心markdown格式化
- [扩展Markdown功能](/posts/markdown-extension-syntax) - 高级格式化选项

关于文章配置和元数据，请参考[文章配置](/posts/md-configuration)指南。

> [!tip]
> 在创建内容之前，先自定义基本配置以匹配您网站的品牌和导航结构。
