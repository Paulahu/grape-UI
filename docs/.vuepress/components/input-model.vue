<template>
  <div class="box">
    <g-input v-model="message"></g-input>
    <div>
    value: {{message}}
    </div>
  </div>

</template>

<script>
  import Input from "../../../src/Input"
  export default {
    name: 'input-tip.vue',
    components: {
      'g-input': Input
    },
    data() {
      return {
        message: "请输入"
      };
    }
  }
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
  .box {
    & > div {
      margin-top: 15px;
    }
  }
</style>