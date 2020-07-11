<template>
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
    {{content}}
    <div class="row">
      <g-button type="primary" icon="thumb-up" >点赞</g-button>
      <g-button type="primary" icon="download" >下载</g-button>
      <g-button type="primary" icon="upload" >上传</g-button>
      <g-button type="warning" icon="like" >收藏</g-button>
      <g-button type="success" icon="share" >转发</g-button>
    </div>
  </div>

</template>

<script>
  import Button from "../../../src/Button"
  import Icon from "../../../src/Icon"

  export default {
    name: 'button-icons.vue',
    components: {
      'g-button': Button,
      'g-icon': Icon
    },
    data() {
      return {
        content: '其他图标'
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  .row {
    margin: 15px 0;
  }
</style>