<template>
  <div class="container">
    <g-row gutter="0">
      <g-col span="8">col-8 gutter=0</g-col>
      <g-col span="8">col-8 gutter=0</g-col>
      <g-col span="8">col-8 gutter=0</g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="8">col-8 gutter=10</g-col>
      <g-col span="8">col-8 gutter=10</g-col>
      <g-col span="8">col-8 gutter=10</g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="8">col-8 gutter=20</g-col>
      <g-col span="8">col-8 gutter=20</g-col>
      <g-col span="8">col-8 gutter=20</g-col>
    </g-row>
    <g-row gutter="30">
      <g-col span="8">col-8 gutter=30</g-col>
      <g-col span="8">col-8 gutter=30</g-col>
      <g-col span="8">col-8 gutter=30</g-col>
    </g-row>
  </div>
</template>

<script>
  import Col from "../../../src/Col"
  import Row from "../../../src/Row"

  export default {
    name: 'grid-gutter.vue',
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