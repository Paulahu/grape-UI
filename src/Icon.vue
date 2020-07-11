<template>
  <svg class="g-icon">
    <use :xlink:href=`#${name}`></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    name: 'Icon.vue',
    props: ['name']
  }
</script>

<style scoped lang="scss">
  .g-icon {
    width: 1em;
    height: 1em;
    & > [herf*="i-"] {
      color:red;
    }
  }
</style>