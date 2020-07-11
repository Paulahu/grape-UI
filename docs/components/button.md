---
title:Button-按钮
---

# Button 按钮
常用的操作按钮，提供多种按钮形态，同时带有可选iconfont，让按钮更具多样性。

## 基础用法
基础的按钮用法。
#### 预览
<br>
 <ClientOnly>
   <button-demo></button-demo>
 </ClientOnly>


#### 代码
```html
<div>
    <div>
      <g-button>默认按钮</g-button>
      <g-button type="primary">主要按钮</g-button>
      <g-button type="info">信息按钮</g-button>
      <g-button type="success">成功按钮</g-button>
      <g-button type="warning">警告按钮</g-button>
      <g-button type="danger">危险按钮</g-button>
    </div>
    <div>
      <g-button simple>简约按钮</g-button>
      <g-button type="primary" simple>主要按钮</g-button>
      <g-button type="info" simple>信息按钮</g-button>
      <g-button type="success" simple>成功按钮</g-button>
      <g-button type="warning" simple>警告按钮</g-button>
      <g-button type="danger" simple>危险按钮</g-button>
    </div>
    <div>
      <g-button round>圆角按钮</g-button>
      <g-button type="primary" round>主要按钮</g-button>
      <g-button type="info" round>信息按钮</g-button>
      <g-button type="success" round>成功按钮</g-button>
      <g-button type="warning" round>警告按钮</g-button>
      <g-button type="danger" round>危险按钮</g-button>
    </div>
    <div>
      <g-button simple round>简约按钮</g-button>
      <g-button type="primary" simple round>主要按钮</g-button>
      <g-button type="info" simple round>信息按钮</g-button>
      <g-button type="success" simple round>成功按钮</g-button>
      <g-button type="warning" simple round>警告按钮</g-button>
      <g-button type="danger" simple round>危险按钮</g-button>
    </div>
  </div>
```

## 禁用状态
按钮不可用状态。

#### 预览
<br>

 <ClientOnly>
   <button-disabled></button-disabled>
 </ClientOnly>

#### 代码
```html
<div>
    <div>
      <g-button disabled>默认按钮</g-button>
      <g-button type="primary" disabled>主要按钮</g-button>
      <g-button type="info" disabled>信息按钮</g-button>
      <g-button type="success" disabled>成功按钮</g-button>
      <g-button type="warning" disabled>警告按钮</g-button>
      <g-button type="danger" disabled>危险按钮</g-button>
    </div>
    <div>
      <g-button simple disabled>简约按钮</g-button>
      <g-button type="primary" simple disabled>主要按钮</g-button>
      <g-button type="info" simple disabled>信息按钮</g-button>
      <g-button type="success" simple disabled>成功按钮</g-button>
      <g-button type="warning" simple disabled>警告按钮</g-button>
      <g-button type="danger" simple disabled>危险按钮</g-button>
    </div>
  </div>
```

## 文字按钮
没有边框和背景色的按钮。

#### 预览
<br>

 <ClientOnly>
   <button-text></button-text>
 </ClientOnly>

#### 代码
```html
<div>
    <g-button type="text">文字按钮</g-button>
    <g-button type="text" disabled>文字按钮</g-button>
</div>
```

## 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

- 可选择只含有图标的按钮
- 可选择既有图标也有文字的按钮
- 图标可选择位于文章的左边或右边

#### 预览
<br>

 <ClientOnly>
   <button-icons></button-icons>
 </ClientOnly>
 
 #### 代码
 ```html
<div>
    <div class="row">
      <g-button icon="setting" circle>默认按钮</g-button>
      <g-button type="primary" icon="edit" circle>主要按钮</g-button>
      <g-button type="info" icon="message" circle>信息按钮</g-button>
      <g-button type="success" icon="tick" circle>成功按钮</g-button>
      <g-button type="warning" icon="warning" circle>警告按钮</g-button>
      <g-button type="danger" icon="delete" circle>危险按钮</g-button>
    </div>
    <div class="row">
      <g-button icon="setting" >设置</g-button>
      <g-button type="primary" icon="edit">编辑</g-button>
      <g-button type="info" icon="message">消息</g-button>
      <g-button type="success" icon="tick">完成</g-button>
      <g-button type="warning" icon="warning">警告</g-button>
      <g-button type="danger" icon="delete">删除</g-button>
    </div>
    <div class="row">
      <g-button icon="setting" icon-position="right">设置</g-button>
      <g-button type="primary" icon="edit"icon-position="right">编辑</g-button>
      <g-button type="info" icon="message" icon-position="right">消息</g-button>
      <g-button type="success" icon="tick" icon-position="right">完成</g-button>
      <g-button type="warning" icon="warning" icon-position="right">警告</g-button>
      <g-button type="danger" icon="delete" icon-position="right">删除</g-button>
    </div>
  </div>
```

## 组合按钮
以组合按钮的方式出现，常用于多项选择的操作。
- 使用`<g-button-group>` 标签来嵌套你的按钮。
#### 预览
<br>

 <ClientOnly>
   <button-group></button-group>
 </ClientOnly>
 
#### 代码
```html
<div>
      <g-button-group>
        <g-button type="primary" icon="left">上一页</g-button>
        <g-button type="primary" icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
      <g-button-group>
        <g-button type="primary" icon="left">上一页</g-button>
        <g-button type="primary">更多</g-button>
        <g-button type="primary" icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
  </div>
```

## 加载按钮
点击按钮后进行数据加载操作，在按钮上显示加载状态。
- 可以点击按钮进入加载状态
- 可以设置按钮默认为加载状态
#### 预览
<br>

 <ClientOnly>
   <button-loading></button-loading>
 </ClientOnly>
 
#### 代码
```vue
<templete>
    <div>
        <g-button type="primary" icon="download" :loading="loading" @click="loading=true">点击下载</g-button>
        <g-button type="primary" icon="download" :loading="true" >加载中</g-button>
    </div>
</templete>
<script>
    export default {
       data() {
         return {
           loading: false
         }
       }
     }
</script>

```
## 参数说明
<br>
 
 | 参数 | 说明| 类型  |   可选值| 默认值     |
 | :---       |    :---   |    :--- |    :--- |    :--- |
 | type  | 按钮类型  | string   | primary / success / warning / danger / info / text      | default      |
 | simple  | 是否简约按钮      | boolean   | ——  |  false  |
 | round  | 是否圆角按钮      | boolean   | ——  |  false  |
 | disabled  | 是否禁用按钮      | boolean   | ——  |  false  |
 | loading  | 是否加载中状态      | boolean   | ——  |  false  |
 | circle  | 是否使用小图标      | boolean   | ——  |  false  |
 | icon  | 图标类名     | string   | ——  |  ——  |
 | icon-position  | 图标位置    | string   | left/right  | left  |
 
 
 