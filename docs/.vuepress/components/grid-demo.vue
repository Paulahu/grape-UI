<template>
  <div class="container">
    <g-row>
      <g-col span="12">col-12</g-col>
      <g-col span="12">col-12</g-col>
    </g-row>
    <g-row>
      <g-col span="8">col-8</g-col>
      <g-col span="8">col-8</g-col>
      <g-col span="8">col-8</g-col>
    </g-row>
    <g-row>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
    </g-row>
    <g-row>
      <g-col span="2">col-2</g-col>
      <g-col span="22">col-22</g-col>
    </g-row>
  </div>
</template>

<script>
  import Col from "../../../src/Col"
  import Row from "../../../src/Row"

  export default {
    name: 'grid-demo.vue',
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