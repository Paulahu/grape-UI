---
title:介绍
---



# grape-UI
[![Build Status](https://travis-ci.org/Paulahu/grape-UI.svg?branch=master)](https://travis-ci.org/Paulahu/grape-UI)
[![npm](https://img.shields.io/npm/v/grape-ui?style=flat)](https://www.npmjs.com/package/grape-ui-test)
![NPM](https://img.shields.io/npm/l/grape-ui)


An easy UI components based on Vue.



 grape-UI 是一个实用的 UI 简易框架，目前提供了一些常用组件（不定期更新），适合 PC 端和移动端使用。


## 介绍
这是我在学习 Vue 的过程中造的一组轮子，希望对你有用
## 开始使用
### 1. 添加CSS样式
使用本框架前，请在 CSS 中开启 border-box(IE 8 及以上浏览器支持此样式)

```
*，*::before,*::after{ box-sizing: border-box }
```

你还需要设置默认颜色等变量（后续会改为  SCSS 变量）
```css
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式。

### 2. 安装
安装 grape-ui

```
npm i --save grape-ui
```

或者

```
yarn add grape-ui
```

### 3. 引入grape-ui
```javascript
import { Button, Icon, ButtonGroup } from 'grape-ui'
import 'grape-ui/dist/index.css'

export default {
   name: 'app',
   components: {
       'g-button': Button
   }
}
```

## 现已支持

- [x] Button（按钮）
- [ ] Input（输入框）
- [ ] Grid（栅栏）
- [ ] Layout（布局）
- [ ] Toast（吐司弹出）
- [ ] Tabs（标签页）
- [ ] Popover（弹出框）
- [ ] Collapse（折叠面板）

## 文档
详细介绍请参阅[官方文档]()（待更新）
## 提问
如果你遇到了问题或者有疑问，欢迎给我提[Issues](https://github.com/Paulahu/grape-UI/issues)
## 变更记录
版本更新记录请参阅[release notes](https://github.com/Paulahu/grape-UI/releases)
## 联系方式
邮箱：paulahu1995@gmail.com
## 贡献代码
如果你有好的意见或建议，欢迎给我[Pull Requests](https://github.com/Paulahu/grape-UI/pulls)