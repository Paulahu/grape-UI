---
title:Input-输入框
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础用法

#### 预览
<br>
 <ClientOnly>
   <input-demo></input-demo>
 </ClientOnly>
 
 #### 代码
 ```html
   <g-input placeholder="请输入内容"></g-input>
```
## 禁用状态
#### 预览
<br>
 <ClientOnly>
   <input-disabled></input-disabled>
 </ClientOnly>
 
 #### 代码
 ```html
   <g-input placeholder="请输入内容" disabled></g-input>
```

## 只读状态
#### 预览
<br>
 <ClientOnly>
   <input-readonly></input-readonly>
 </ClientOnly>
 
 #### 代码
 ```html
   <g-input placeholder="请输入内容" readonly></g-input>
```
## 错误提示状态
#### 预览
<br>
 <ClientOnly>
   <input-error></input-error>
 </ClientOnly>
 
 #### 代码
 ```html
   <g-input placeholder="请输入内容" error="请输入正确的格式"></g-input>
```

## 正确提示状态
#### 预览
<br>
 <ClientOnly>
   <input-tip></input-tip>
 </ClientOnly>
 
 #### 代码
 ```html
   <g-input placeholder="请输入内容" tip="输入格式正确"></g-input>
```

## v-model双向绑定状态
#### 预览
<br>
 <ClientOnly>
   <input-model></input-model>
 </ClientOnly>
 
 #### 代码
 ```html
    <template>
      <g-input v-model="message"></g-input>
      <div>
         value: {{message}}
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            message: "请输入"
          };
        }
      }
    </script>
```

## 参数说明
<br>
 
 | 参数 | 说明| 类型  |   可选值| 默认值     |
 | :---       |    :---   |    :--- |    :--- |    :--- |
 | placeholder  | 输入框默认值      | string   | ——  |  ——  |
 | disabled  | 是否禁用输入框      | boolean   | ——  |  false  |
 | readonly  | 是否为只读状态      | boolean   | ——  |  false  |
 | error  | 是否提供错误信息      | boolean   | ——  |  false  |
 | tip | 是否提供正确信息      | boolean   | ——  |  false  |
 | v-model | 是否使用双向绑定      | string  | ——  |  false  |
