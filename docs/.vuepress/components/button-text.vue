<template>
  <div>
    <g-button type="text">文字按钮</g-button>
    <g-button type="text" disabled>文字按钮</g-button>
  </div>
</template>

<script>
  import Button from "../../../src/Button"
  import Icon from "../../../src/Icon"

  export default {
    name: 'button-text.vue',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
</script>

<style scoped>

</style>