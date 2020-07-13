<template>
  <g-input placeholder="请输入内容" readonly></g-input>
</template>

<script>
  import Input from "../../../src/Input"
  export default {
    name: 'input-readonly.vue',
    components: {
      'g-input': Input
    }
  }
</script>

<style scoped>

</style>