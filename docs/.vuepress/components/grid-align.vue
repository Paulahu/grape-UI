<template>
  <div class="container">
    <g-row align="left">
      <g-col span="6">col-6 align=left</g-col>
      <g-col span="6">col-6 align=left</g-col>
    </g-row>
    <g-row align="right">
      <g-col span="6">col-6 align=right</g-col>
      <g-col span="6">col-6 align=right</g-col>
    </g-row>
    <g-row align="center">
      <g-col span="6">col-6 align=center</g-col>
      <g-col span="6">col-6 align=center</g-col>
    </g-row>
  </div>
</template>

<script>
  import Col from "../../../src/Col"
  import Row from "../../../src/Row"

  export default {
    name: 'grid-align.vue',
    components: {
      'g-row': Row,
      'g-col': Col
    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin: 20px 0;
  }
</style>