<template>
  <div class="col" :class="[`col-${span}`,`offset && offset-${offset}`]" :style="{paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Col.vue',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    created() {
      console.log('col created')
    },
    mounted() {
      console.log('col mounted')
    }
  }
</script>

<style scoped lang="scss">
 .col {
   height: 100px;
   width: 50%;
   color: #fff;
   text-align: center;
   line-height: 100px;
   padding: 0 10px;
   margin-bottom: 10px;

   $class-prefix: col-;
   @for $n from 1 through 24 {
     &.#{$class-prefix}#{$n} {
       width: ($n / 24) * 100%;
     }
   }

   $class-prefix: offset-;
   @for $n from 1 through 24 {
     &.#{$class-prefix}#{$n} {
       margin-left: ($n / 24) * 100%;
     }
   }

   .wrapper {
     border: 1px solid green;
     background-color: deepskyblue;
   }
 }
</style>