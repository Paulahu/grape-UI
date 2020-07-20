---
title: 快速上手
---

# 快速上手

## 安装

参考 [安装](/install/) 章节

## 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```CSS
*，*::before,*::after{ box-sizing: border-box }
```

IE 8 及以上浏览器支持此样式。

## 引入 grape-ui
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