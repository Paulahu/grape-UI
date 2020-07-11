<template>
  <div>
    <g-button type="primary" icon="download" :loading="loading" @click="loading=true">点击下载</g-button>
    <g-button type="primary" icon="download" :loading="true" >加载中</g-button>
  </div>


</template>

<script>
  import Button from "../../../src/Button"
  import Icon from "../../../src/Icon"
  import ButtonGroup from "../../../src/Button-group"

  export default {
    name: 'button-loading.vue',
    components: {
      'g-button': Button,
      'g-icon': Icon,
      'g-button-group': ButtonGroup
    },
    data() {
      return {
        loading: false
      }
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