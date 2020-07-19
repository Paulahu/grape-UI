<template>
  <div class="container">
    <g-row>
      <g-col span="2">col-2</g-col>
      <g-col span="20"offset="2">col-20 offset=2</g-col>
    </g-row>
    <g-row>
      <g-col span="4">col-4</g-col>
      <g-col span="18"offset="2">col-18 offset=2</g-col>
    </g-row>
    <g-row>
      <g-col span="4">col-4</g-col>
      <g-col span="8"offset="2">col-8 offset=2</g-col>
      <g-col span="8"offset="2">col-8 offset=2</g-col>
    </g-row>
    <g-row>
      <g-col span="4">col-4</g-col>
      <g-col span="4"offset="6">col-8 offset=6</g-col>
      <g-col span="8"offset="2">col-8 offset=2</g-col>
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