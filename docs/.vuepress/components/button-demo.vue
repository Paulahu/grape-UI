<template>
  <div>
    <div class="row">
      <g-button>默认按钮</g-button>
      <g-button type="primary">主要按钮</g-button>
      <g-button type="info">信息按钮</g-button>
      <g-button type="success">成功按钮</g-button>
      <g-button type="warning">警告按钮</g-button>
      <g-button type="danger">危险按钮</g-button>
    </div>
    <div class="row">
      <g-button simple>简约按钮</g-button>
      <g-button type="primary" simple>主要按钮</g-button>
      <g-button type="info" simple>信息按钮</g-button>
      <g-button type="success" simple>成功按钮</g-button>
      <g-button type="warning" simple>警告按钮</g-button>
      <g-button type="danger" simple>危险按钮</g-button>
    </div>
    <div class="row">
      <g-button round>圆角按钮</g-button>
      <g-button type="primary" round>主要按钮</g-button>
      <g-button type="info" round>信息按钮</g-button>
      <g-button type="success" round>成功按钮</g-button>
      <g-button type="warning" round>警告按钮</g-button>
      <g-button type="danger" round>危险按钮</g-button>
    </div>
    <div class="row">
      <g-button simple round>简约按钮</g-button>
      <g-button type="primary" simple round>主要按钮</g-button>
      <g-button type="info" simple round>信息按钮</g-button>
      <g-button type="success" simple round>成功按钮</g-button>
      <g-button type="warning" simple round>警告按钮</g-button>
      <g-button type="danger" simple round>危险按钮</g-button>
    </div>
  </div>

</template>

<script>
  import Button from "../../../src/Button"
  import Icon from "../../../src/Icon"

  export default {
    name: 'button-demo.vue',
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