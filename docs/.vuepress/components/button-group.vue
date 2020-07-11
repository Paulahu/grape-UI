<template>
  <div>
      <g-button-group>
        <g-button type="primary" icon="left">上一页</g-button>
        <g-button type="primary" icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
      <g-button-group>
        <g-button type="primary" icon="left">上一页</g-button>
        <g-button type="primary"  >更多</g-button>
        <g-button type="primary" icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
  </div>


</template>

<script>
  import Button from "../../../src/Button"
  import Icon from "../../../src/Icon"
  import ButtonGroup from "../../../src/Button-group"

  export default {
    name: 'button-group.vue',
    components: {
      'g-button': Button,
      'g-icon': Icon,
      'g-button-group': ButtonGroup
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