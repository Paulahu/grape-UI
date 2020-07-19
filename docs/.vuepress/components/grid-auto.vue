<template>
  <div class="container">
    <g-row>
      <g-col span="24"
             :ipad="{span: 10}"
             :narrow-pc="{span: 10}"
             :pc="{span: 8}"
             :wide-pc="{span: 4}"
      >col</g-col>
      <g-col span="24"
             :ipad="{span: 10}"
             :narrow-pc="{span: 14}"
             :pc="{span: 16}"
             :wide-pc="{span: 20}"
      >col</g-col>
    </g-row>
    </div>
</template>

<script>
  import Col from "../../../src/Col"
  import Row from "../../../src/Row"

  export default {
    name: 'grid-auto.vue',
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