<template>
  <div>
    <div class="row">
      <g-button disabled>默认按钮</g-button>
      <g-button type="primary" disabled>主要按钮</g-button>
      <g-button type="info" disabled>信息按钮</g-button>
      <g-button type="success" disabled>成功按钮</g-button>
      <g-button type="warning" disabled>警告按钮</g-button>
      <g-button type="danger" disabled>危险按钮</g-button>
    </div>
    <div class="row">
      <g-button simple disabled>简约按钮</g-button>
      <g-button type="primary" simple disabled>主要按钮</g-button>
      <g-button type="info" simple disabled>信息按钮</g-button>
      <g-button type="success" simple disabled>成功按钮</g-button>
      <g-button type="warning" simple disabled>警告按钮</g-button>
      <g-button type="danger" simple disabled>危险按钮</g-button>
    </div>
  </div>

</template>

<script>
  import Button from "../../../src/Button"
  import Icon from "../../../src/Icon"

  export default {
    name: 'button-disabled.vue',
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