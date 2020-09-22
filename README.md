<div align="center" >
    <img width="300" src="https://github.com/Paulahu/grape-UI/blob/master/logo.png">
</div>

<div align="center">

An easy UI components based on Vue.

[![npm](https://img.shields.io/npm/v/grape-ui?style=flat)](https://www.npmjs.com/package/grape-ui-test)
![NPM](https://img.shields.io/npm/l/grape-ui)
</div>

 grape-UI 是一个实用的 UI 简易框架，目前提供了一些常用组件（不定期更新），适合 PC 端和移动端使用。


## 介绍
这是我在学习 Vue 的过程中造的一组轮子，希望对你有用
## 开始使用
### 1. 添加CSS样式
使用本框架前，请在 CSS 中开启 border-box(IE 8 及以上浏览器支持此样式)

```
*，*::before,*::after{ box-sizing: border-box }
```

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
#### 全局引入

```js
import Vue from 'vue'
import "grape-ui/dist/index.css";
import { Button, ButtonGroup, Row, Col, Icon, Input} from 'grape-ui'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

```

#### 模块化引用

```js
import Vue from 'vue'
import "grape-ui/dist/index.css";
import { Button, ButtonGroup, Row, Col, Icon, Input} from 'grape-ui'

export default {
    name: 'app',
    components: {
        'g-button-group': ButtonGroup,
        'g-button': Button,
        'g-icon': Icon,
        'g-input': Input,
        'g-row': Row,
        'g-col': Col
    }
}
```

## 现已支持

- [x] Button（按钮）
- [x] Input（输入框）
- [x] Grid（栅栏）
- [ ] Layout（布局）
- [ ] Toast（吐司弹出）
- [ ] Tabs（标签页）
- [ ] Popover（弹出框）
- [ ] Collapse（折叠面板）

## 文档
详细介绍请参阅[官方文档](https://github.com/Paulahu/grape-UI)
## 提问
如果你遇到了问题或者有疑问，欢迎给我提[Issues](https://github.com/Paulahu/grape-UI/issues)
## 变更记录
版本更新记录请参阅[release notes](https://github.com/Paulahu/grape-UI/releases)
## 联系方式
邮箱：paulahu1995@gmail.com
## 贡献代码
如果你有好的意见或建议，欢迎给我[Pull Requests](https://github.com/Paulahu/grape-UI/pulls)

