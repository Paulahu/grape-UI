<template>
  <g-input placeholder="请输入内容" tip="输入格式正确"></g-input>
</template>

<script>
  import Input from "../../../src/Input"
  export default {
    name: 'input-tip.vue',
    components: {
      'g-input': Input
    }
  }
</script>

<style scoped>

</style>