<template>
  <g-input placeholder="请输入内容" error="请输入正确的格式"></g-input>
</template>

<script>
  import Input from "../../../src/Input"
  export default {
    name: 'input-error.vue',
    components: {
      'g-input': Input
    }
  }
</script>

<style scoped>

</style>