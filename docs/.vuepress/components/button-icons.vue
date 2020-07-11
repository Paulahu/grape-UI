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
      <g-button type="primary" simple>主要按钮</g-button>
      <g-button type="info" simple>信息按钮</g-button>
      <g-button type="success" simple>成功按钮</g-button>
      <g-button type="warning" simple>警告按钮</g-button>
      <g-button type="danger" simple>危险按钮</g-button>
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