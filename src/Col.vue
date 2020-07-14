<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Col.vue',
    props: {
      span: {
        type: [Number, String]
      }
    }
  }
</script>

<style scoped lang="scss">
 .col {
   height: 100px;
   background-color: #3a5169;
   width: 50%;
   border: 1px solid red;
   color: #fff;
   text-align: center;
   line-height: 100px;

   $class-prefix: col-;
   @for $n from 1 through 24 {
     &.#{$class-prefix}#{$n} {
       width: ($n / 24) * 100%;
     }
   }
 }
</style>