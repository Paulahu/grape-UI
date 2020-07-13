<template>
  <g-input placeholder="请输入内容" disabled></g-input>
</template>

<script>
  import Input from "../../../src/Input"
  export default {
    name: 'input-disabled.vue',
    components: {
      'g-input': Input
    }
  }
</script>

<style scoped>

</style>