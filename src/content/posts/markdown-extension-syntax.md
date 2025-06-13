---
title: 'Markdown扩展语法'
description: 'Litos主题中增强Markdown功能的综合指南'
pubDate: 2025-04-29
author: 'Dnzzk2'
recommend: true
heroImage: 'markdown-extension-syntax.webp'
ogImage: 'markdown-extension-syntax.webp'
heroImageAspectRatio: '16/9'
tags: ['Markdown', '指南']
---

本指南基于[markdown-mdx-extended-features](https://astro-antfustyle-theme.vercel.app/blog/markdown-mdx-extended-features/)进行了轻微修改。**感谢**原作者:link[Stephanie Lin]{#@lin-stephanie}的贡献。

## 提示框

由:link[rehype-callouts]{id=lin-stephanie/rehype-callouts class='github'}支持，您可以在`plugins/index.ts`中配置该插件。

如果您更改了`theme`配置（默认值：`'vitepress'`），您还需要更新在`src/styles/pro.css`中导入的CSS文件（`@import 'rehype-callouts/theme/yourconfig'`）。

```md
<!-- 提示框类型名称不区分大小写：'Note'、'NOTE'和'note'是等效的。 -->

<!-- vitepress -->

<!-- 这是一个_不可折叠的_提示框 -->
> [!note]
> 提示内容。

> [!tip]
> 技巧内容。

> [!important]
> 重要内容。

> [!warning]
> 警告内容。

> [!caution]
> 注意内容。

> [!caution]- 这是一个**可折叠的**提示框
> 注意内容。

> [!note]+ 这是一个**可折叠的**提示框
> 提示内容。
```

> [!note]
> 提示内容。

> [!tip]
> 技巧内容。

> [!important]
> 重要内容。

> [!warning]
> 警告内容。

> [!caution]
> 注意内容。

> [!caution]- 这是一个**可折叠的**提示框
> 注意内容。

> [!note]+ 这是一个**可折叠的**提示框
> 提示内容。

## 功能丰富的代码块

由:link[astro-expressive-code]{id=https://github.com/expressive-code/expressive-code/tree/main/packages/astro-expressive-code}支持，配合[@expressive-code/plugin-collapsible-sections](https://expressive-code.com/plugins/collapsible-sections/)和[@expressive-code/plugin-line-numbers](https://expressive-code.com/plugins/line-numbers/)插件为代码块添加样式和额外功能。

要自定义代码块主题或功能，请在查看:link[配置Expressive Code]{id=https://expressive-code.com/reference/configuration/}后修改项目根目录中的`ec.config.mjs`文件，例如[更改主题](https://expressive-code.com/guides/themes/#using-bundled-themes)、[启用自动换行](https://expressive-code.com/key-features/word-wrap/#wrap)或[切换行号](https://expressive-code.com/plugins/line-numbers/#showlinenumbers)。

这里有一个简单预览，展示了可能的功能。查看[详细指南](https://expressive-code.com/key-features/syntax-highlighting/)获取更多信息。

#### 语法高亮

```js title='example.md'
console.log('This code is syntax highlighted!')
```

```ansi title='ansi-example.md'
ANSI colors:
- Regular: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- Bold:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- Dimmed:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 colors (showing colors 160-177):
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

Full RGB colors:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

Text formatting: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```

##### 代码编辑器框架

```js title="my-test-file.js"
// Use `title="my-test-file.js"`
console.log('Title attribute example')
```

```ts
// src/content/index.ts
// Use `// src/content/index.ts`
console.log('File name comment example')
```

##### 终端框架

```bash
echo "This terminal frame has no title"
```

```powershell title="PowerShell terminal example"
Write-Output "This one has a title!"
```

##### 标记整行和行范围

```js {1, 4, 7-8}
// Line 1 - targeted by line number
// Line 2
// Line 3
// Line 4 - targeted by line number
// Line 5
// Line 6
// Line 7 - targeted by range "7-8"
// Line 8 - targeted by range "7-8"
```

##### 选择行标记类型（mark, ins, del）

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('this line is marked as deleted')
  // This line and the next one are marked as inserted
  console.log('this is the second inserted line')

  return 'this line uses the neutral default marker type'
}
```

##### 为行标记添加标签

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

##### 在单独的行上添加长标签

```jsx {"1. Provide the value prop here:":5-6} del={"2. Remove the disabled and active states:":8-10} ins={"3. Add this to render the children inside the button:":12-15}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

##### 使用类diff语法

```diff
+this line will be marked as inserted
-this line will be marked as deleted
this is a regular line
```

```diff lang="js"
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
```

##### 标记行内文本

```js "given text"
// Plaintext search strings
function demo() {
  // Mark any given text inside lines
  return 'Multiple matches of the given text are supported'
}
```

##### 使用正则表达式标记行内文本

```ts /ye[sp]/
// Regular expressions
console.log('The words yes and yep will be marked.')
```

```sh /\/ho.*\//
# Regular expressions
echo "Test" > /home/test.txt
```

```ts /ye(s|p)/
// Regular expressions
If you only want to mark certain parts matched by your regular expression, you can use capture groups. 

For example, the expression `/ye(s|p)/` will match yes and yep, but only mark the character s or p:
```

```ts /ye(?:s|p)/
// Regular expressions
To prevent this special treatment of capture groups, you can convert them to non-capturing groups by adding ?: after the opening parenthesis. For example:

This block uses `/ye(?:s|p)/`, which causes the full
matching words "yes" and "yep" to be marked.
```

```js "return true;" ins="inserted" del="deleted"
// Selecting inline marker types (mark, ins, del)
function demo() {
  console.log('These are inserted and deleted marker types');
  // The return statement uses the default marker type
  return true;
}
```

##### 配置每个代码块的换行

```js wrap
// Example with wrap
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

```js wrap=false
// Example with wrap=false
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

##### 配置换行行的缩进

```js wrap preserveIndent
// Example with preserveIndent (enabled by default)
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

```js wrap preserveIndent=false
// Example with preserveIndent=false
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

##### 可折叠部分

```js collapse={1-5, 12-14, 21-24}
// All this boilerplate setup code will be collapsed
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// This part of the code will be visible by default
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // You can have multiple collapsed sections
  const a = 1
  const b = 2
  const c = a + b

  // This will remain visible
  console.log(`Calculation result: ${a} + ${b} = ${c}`)
  return c
}

// All this code until the end of the block will be collapsed again
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: 'End of example boilerplate code' })
```

##### 显示每个块的行号

```js showLineNumbers
// This code block will show line numbers
console.log('Greetings from line 2!')
console.log('I am on line 3')
```

```js showLineNumbers=false
// Line numbers are disabled for this block
console.log('Hello?')
console.log('Sorry, do you know what line I am on?')
```

```js showLineNumbers startLineNumber=5
// Changing the starting line number
console.log('Greetings from line 5!')
console.log('I am on line 6')
```

## 图片标题与链接

使用[`:::image`](https://github.com/lin-stephanie/remark-directive-sugar?tab=readme-ov-file#image-)指令，来自:link[remark-directive-sugar]{#lin-stephanie/remark-directive-sugar .github}，将图片包装在一个容器中，用于添加标题、可点击链接等功能。通过`plugins/index.ts`中的`image`选项（`remarkDirectiveSugar`）进行自定义，并在`src/styles/pro.css`中的`/* :::image */`下设置样式。

### `:::image-figure`

`:::image-figure[caption]{<figcaption> attrs}`：方括号定义`<figcaption>`文本（如果省略，则默认使用`![]()`) 中的alt文本)，而花括号用于内联样式或支持的属性，应用于生成的`<figcaption>`元素。

`![alt](image path)(<img> attrs)`：标准Markdown图片，带有可选的括号中的属性，由:link[remark-imgattr]{#OliverSpeir/remark-imgattr .github}支持，用于自定义生成的`<img>`元素。

`:::image-figure[caption]{<figcaption> attrs}`：方括号定义`<figcaption>`文本（如果省略，则默认使用`![]()`) 中的alt文本)，而花括号用于内联样式或支持的属性，应用于生成的`<figcaption>`元素。

`![alt](image path)(<img> attrs)`：标准Markdown图片，带有可选的括号中的属性，由:link[remark-imgattr]{#OliverSpeir/remark-imgattr .github}支持，用于自定义生成的`<img>`元素。

```md title=':::image-figure.md'
:::image-figure[这是一个带有 _`<figure>` 属性_的**图片标题**]{style="text-align:center;color:orange"}
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-figure[这是一个带有 _`<img>` 属性_的**图片标题**。]
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style: width:600px;)
:::

<!-- 💡 使用 `(class:no-zoom)` 禁用缩放 -->
:::image-figure[这是一个带有 `class:no-zoom` 的**图片标题**。]
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(class:no-zoom)
:::

<!-- 💡 如果没有 `[caption]`，则使用 `[alt]` 作为图片标题。 -->
:::image-figure
![如果未设置 `[caption]`，将使用 `![]()` 中的alt文本作为图片标题。](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

<!-- 💡 浅色模式（img-light）和深色模式（img-dark）的图片 -->
<!-- ⚠️ 两个图片语法（![]()] 之间必须至少有一行分隔，否则无法工作。 -->
:::image-figure[此示例显示了浅色模式（添加 `class:img-light`）和深色模式（添加 `class:img-dark`）的不同图片。]
![](~/assets/images/markdown-extension-syntax/image-16-9-light.png)(class:img-light)

![](~/assets/images/markdown-extension-syntax/image-16-9-light.png)(class:img-dark)
:::

<!-- ❌ 如果图片标题没有可用文本，则无法工作。 -->
:::image-figure
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
```

:::image-figure[这是一个带有 _`<figure>` 属性_的**图片标题**]{style="text-align:center;color:orange"}
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-figure[这是一个带有 _`<img>` 属性_的**图片标题**。]
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style: width:600px;)
:::

:::image-figure[这是一个带有 `class:no-zoom` 的**图片标题**。]
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(class:no-zoom)
:::

:::image-figure
![如果未设置 `[caption]`，将使用 `![]()` 中的alt文本作为图片标题。](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-figure[此示例显示了浅色模式（添加 `class:img-light`）和深色模式（添加 `class:img-dark`）的不同图片。]
![](~/assets/images/markdown-extension-syntax/image-16-9-dark.png)(class:img-light)

![](~/assets/images/markdown-extension-syntax/image-16-9-light.png)(class:img-dark)
:::

> [!warning]
>
> 直接设置图片的`width`属性可能会导致图片模糊。[了解更多](https://github.com/Dnzzk2/Litos/discussions/17)

### `:::image-a`

这个自定义指令将图片包装在链接中，使其可点击。

`:::image-a{<a> attrs}`：在花括号中为`<a>`元素定义链接（href）、样式或类。

`![alt](图片路径)(<img> attrs)`：与上面相同。

```md title=':::image-a.md'
:::image-a{href="https://github.com/Dnzzk2/Litos"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-a{href="https://github.com/Dnzzk2/Litos" style="display:block" .custom-class}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style: margin-bottom: -1rem; transform:scaleX(1.1) scaleY(1.1);, loading: eager)
:::

::::image-a{href="https://github.com/Dnzzk2/Litos"}
:::image-figure[此示例展示了`:::image-a`如何包围`:::image-figure`（两者可互换）。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
::::

<!-- ❌ 未提供外部链接，将无法工作。-->
:::image-a
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
```

:::image-a{href="https://github.com/Dnzzk2/Litos"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-a{href="https://github.com/Dnzzk2/Litos" style="display:block" .custom-class}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style: margin-bottom: -1rem; transform:scaleX(1.1) scaleY(1.1);, loading: eager)
:::

::::image-a{href="https://github.com/Dnzzk2/Litos"}
:::image-figure[此示例展示了`:::image-a`如何包围`:::image-figure`（两者可互换）。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style:padding-top:1rem;)
:::
::::

### :::image-figure-polaroid

宝丽来风格的图片，带有边框和阴影。

为了确保在手机上的样式大小，我设置了最小宽度为300px，您可以在`src/styles/picture.css`中修改和扩展样式。

```md title=':::image-figure-polaroid.md'
:::::image-div-polaroid
:::image-figure-polaroid[这是一个带有 _`<img>` 属性_的**图片标题**。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)

markdown-extension-syntax.png
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

<!-- 修改样式 -->
:::::image-div-polaroid
:::image-figure-polaroid{style="width:500px;"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::
```

:::::image-div-polaroid
:::image-figure-polaroid[这是一个带有 _`<img>` 属性_的**图片标题**。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)

markdown-extension-syntax.png
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid{style="width:500px;"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::
```

:::::image-div-polaroid
:::image-figure-polaroid[这是一个带有 _`<img>` 属性_的**图片标题**。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)

markdown-extension-syntax.png
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid{style="width:500px;"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::
```

## 视频嵌入

使用来自:link[remark-directive-sugar]{id=lin-stephanie/remark-directive-sugar .github}的[`::video`](https://github.com/lin-stephanie/remark-directive-sugar?tab=readme-ov-file#video-)指令，可以在不同平台上一致地嵌入视频。通过`plugins/index.ts`中的`video`选项进行自定义，并在`src/styles/pro.css`中的`/* ::video */`下设置样式。

假设`example.md`包含：

```md title='example.md'
<!-- 嵌入YouTube视频 -->
::video-youtube{#gxBkghlglTg}

<!-- 嵌入Bilibili视频，带有自定义`title`属性 -->
::video-bilibili[custom title]{id=BV1MC4y1c7Kv}

<!-- 嵌入Vimeo视频，带有`no-scale`类禁用缩放 -->
::video-vimeo{id=912831806 class='no-scale'}
<!-- ::video-vimeo{id=912831806 .no-scale} -->

<!-- 嵌入自定义视频URL（必须使用`id`，而不是`#`） -->
::video{id=https://www.youtube-nocookie.com/embed/gxBkghlglTg}
```

然后`example.mdx`渲染为：

::video-youtube{#gxBkghlglTg}

::video-bilibili[custom title]{id=BV1MC4y1c7Kv}

::video-vimeo{id=912831806 class='no-scale'}

::video{id=https://www.youtube-nocookie.com/embed/gxBkghlglTg}

## 样式化链接（`:link`）

使用来自:link[remark-directive-sugar]{id=lin-stephanie/remark-directive-sugar .github}的[`:link`](https://github.com/lin-stephanie/remark-directive-sugar?tab=readme-ov-file#link)指令，为GitHub、npm或自定义URL添加带有头像或图标的链接。通过`plugins/index.ts`中的`link`选项进行自定义，并在`src/styles/pro.css`中的`/* :link */`下设置样式。

**链接到GitHub用户或组织（在`id`前添加`@`）**

**示例1**：`:link[Dnzzk2]{#@Dnzzk2}`链接到项目维护者的GitHub个人资料，:link[Dnzzk2]{#@Dnzzk2}。

**示例2**：`:link[Vite]{id=@vitejs}`链接到:link[Vite]{id=@vitejs}组织的GitHub个人资料。

**示例3**：`:link{#@Dnzzk2 tab=repositories}`直接链接到GitHub用户的repositories标签页，如:link{#@Dnzzk2 tab=repositories}。对于GitHub用户，有效的`tab`选项有：`'repositories','projects', 'packages', 'stars', 'sponsoring', 'sponsors'`。

**示例4**：`:link{#@vitejs tab=org-people}`直接链接到GitHub组织的people部分，如:link{#@vitejs tab=org-people}。对于GitHub组织，有效的`tab`选项有：`'org-repositories', 'org-projects', 'org-packages', 'org-sponsoring', and 'org-people'`。

**链接到GitHub仓库**

**示例5**：`:link[Astro]{#withastro/astro}`或`:link[Astro]{id=withastro/astro}`创建一个链接到:link[Astro]{#withastro/astro}仓库的链接。

**链接到npm包**

**示例6**：`:link{#remark-directive-sugar}`链接到npm上的:link{#remark-directive-sugar}主页。

**示例7**：`:link{id=remark-directive-sugar tab=dependencies}`链接到npm上:link{id=remark-directive-sugar tab=dependencies}的依赖部分。对于npm包，有效的`tab`选项有：`'readme', 'code', 'dependencies', 'dependents', and 'versions'`。

**链接到自定义URL（必须使用`id`，而不是`#`）**

**示例8**：`:link{id=https://developer.mozilla.org/en-US/docs/Web/JavaScript}`创建一个链接到:link{id=https://developer.mozilla.org/en-US/docs/Web/JavaScript}的外部链接。

**示例9**：`:link[Google]{id=https://www.google.com/}`创建一个链接到:link[Google]{id=https://www.google.com/}的外部链接。

**自定义**

**示例10**：`:link[Vite]{id=@vitejs url=https://vite.dev/}`通过使用`url`创建一个:link[Vite]{id=@vitejs url=https://vite.dev/}，链接到`https://vite.dev/`而不是`https://github.com/vitejs`。

**示例11**：`:link[Vite]{id=@vitejs img=https://vitejs.dev/logo.svg}`通过使用`img`创建一个:link[Vite]{id=@vitejs img=https://vitejs.dev/logo.svg}，显示自定义logo。

**示例12**：`:link{id=Dnzzk2/Litos class=github}`创建一个带有`class=github`（或`.github`）的:link{id=Dnzzk2/Litos class=github}，覆盖GitHub仓库的默认样式。

**示例13**：`:link[Litos Themes]{id=https://github.com/Dnzzk2/Litos img=https://github.githubassets.com/assets/mona-e50f14d05e4b.png}`完全自定义链接。:link[Litos Themes]{id=https://github.com/Dnzzk2/Litos img=https://litos.vercel.app/favicon.ico}

## 徽章

使用来自:link[remark-directive-sugar]{id=lin-stephanie/remark-directive-sugar .github}的[`:badge`](https://github.com/lin-stephanie/remark-directive-sugar?tab=readme-ov-file#badge-)指令来显示小块信息，如状态或类别。

主题提供以下预定义徽章。您可以通过`plugins/index.ts`中的`badge`选项进行自定义，并在`src/styles/pro.css`中的`/* :badge */`下设置样式。

- `badge-n`: :badge-n

此外，您还可以直接使用`:badge[text]{attrs}`来轻松地对徽章进行视觉自定义。例如：`:badge[ISSUE]{style="background-color: #bef264"}`将显示为:badge[ISSUE]{style="background-color: #bef264"}。如果没有指定颜色，默认外观将如:badge[This]所示。

## 详情下拉框

```md title=':::details.md'
:::details
::summary[详情下拉框]
- 列表项1
- 列表项2
- 列表项3
- 列表项4
:::
```

:::details
::summary[详情下拉框]
- 列表项1
- 列表项2
- 列表项3
- 列表项4
:::

此外，它还支持类似于[remark-directive中的示例](https://github.com/remarkjs/remark-directive?tab=readme-ov-file#use)的用法。

**再次感谢**原作者:link[Stephanie Lin]{#@lin-stephanie}的开发，使得这个主题能够拥有如此出色的扩展功能💗。
