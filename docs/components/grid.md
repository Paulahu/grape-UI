---
title:Grid-栅格
---

# Grid 栅格
通过基础的 24 分栏，方便迅速简便地创建布局。可设置间隙gutter和偏移offset，支持**响应式布局**。

## 基础用法
使用单一分栏创建基础的栅格布局
- 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

#### 预览
<br>
 <ClientOnly>
   <grid-demo></grid-demo>
 </ClientOnly>

#### 代码
```html
  <div class="container">
    <g-row>
      <g-col span="12">col-12</g-col>
      <g-col span="12">col-12</g-col>
    </g-row>
    <g-row>
      <g-col span="8">col-8</g-col>
      <g-col span="8">col-8</g-col>
      <g-col span="8">col-8</g-col>
    </g-row>
    <g-row>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
    </g-row>
    <g-row>
      <g-col span="2">col-2</g-col>
      <g-col span="22">col-22</g-col>
    </g-row>
  </div>
```

## 分栏间隔
分栏之间存在间隔。
- row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

#### 预览
<br>
 <ClientOnly>
   <grid-gutter></grid-gutter>
 </ClientOnly>
 
 #### 代码
 ```html
  <div class="container">
    <g-row gutter="0">
      <g-col span="8">col-8 gutter=0</g-col>
      <g-col span="8">col-8 gutter=0</g-col>
      <g-col span="8">col-8 gutter=0</g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="8">col-8 gutter=10</g-col>
      <g-col span="8">col-8 gutter=10</g-col>
      <g-col span="8">col-8 gutter=10</g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="8">col-8 gutter=20</g-col>
      <g-col span="8">col-8 gutter=20</g-col>
      <g-col span="8">col-8 gutter=20</g-col>
    </g-row>
    <g-row gutter="30">
      <g-col span="8">col-8 gutter=30</g-col>
      <g-col span="8">col-8 gutter=30</g-col>
      <g-col span="8">col-8 gutter=30</g-col>
    </g-row>
  </div>
```

## 分栏偏移
分栏可以偏移。
- col 组件 提供 `offset` 属性来对分栏进行偏移设置，默认偏移量为 0。

#### 预览
<br>
 <ClientOnly>
   <grid-offset></grid-offset>
 </ClientOnly>
 
 #### 代码
 ```html
  <div class="container">
    <g-row>
      <g-col span="2">col-2</g-col>
      <g-col span="20"offset="2">col-20 offset=2</g-col>
    </g-row>
    <g-row>
      <g-col span="4">col-4</g-col>
      <g-col span="18"offset="2">col-18 offset=2</g-col>
    </g-row>
    <g-row>
      <g-col span="4">col-4</g-col>
      <g-col span="8"offset="2">col-8 offset=2</g-col>
      <g-col span="8"offset="2">col-8 offset=2</g-col>
    </g-row>
    <g-row>
      <g-col span="4">col-4</g-col>
      <g-col span="4"offset="6">col-8 offset=6</g-col>
      <g-col span="8"offset="2">col-8 offset=2</g-col>
    </g-row>
  </div>
```

## 分栏对齐
可设置分栏左对齐、右对齐、居中。
 - row 组件 提供 `align` 属性来对分栏进行对齐设置，默认值为false。
 
 #### 预览
 <br>
  <ClientOnly>
    <grid-align></grid-align>
  </ClientOnly>
 
 #### 代码
 ```html
  <div class="container">
    <g-row align="left">
      <g-col span="6">col-6 align=left</g-col>
      <g-col span="6">col-6 align=left</g-col>
    </g-row>
    <g-row align="right">
      <g-col span="6">col-6 align=right</g-col>
      <g-col span="6">col-6 align=right</g-col>
    </g-row>
    <g-row align="center">
      <g-col span="6">col-6 align=center</g-col>
      <g-col span="6">col-6 align=center</g-col>
    </g-row>
  </div>
```

## 响应式布局
预设了5个尺寸（默认为移动端尺寸）：ipad、narrow-pc、pc、wide-pc。
- col 组件可对5个尺寸分别再设置对应尺寸的 `span` 和`offset`的值。

#### 预览
<br>
  <ClientOnly>
    <grid-auto></grid-auto>
  </ClientOnly>
  
#### 代码
```html
  <div class="container">
    <g-row>
      <g-col span="24"
             :ipad="{span: 10}"
             :narrow-pc="{span: 10}"
             :pc="{span: 8}"
             :wide-pc="{span: 4}"
      >col</g-col>
      <g-col span="24"
             :ipad="{span: 10}"
             :narrow-pc="{span: 14}"
             :pc="{span: 16}"
             :wide-pc="{span: 20}"
      >col</g-col>
    </g-row>
  </div>
```

