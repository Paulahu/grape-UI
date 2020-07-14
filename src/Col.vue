<template>
  <div class="col"
       :class="colClass"
       :style="colStyle">
      <slot></slot>
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
    computed: {
      colClass() {
        return[
          `col-${this.span}`,
          `offset && offset-${this.offset}`
        ]
      },
      colStyle() {
        console.log('gutter 变了， 所以我也要变')
        return {
          paddingLeft: this.gutter/2+'px',
          paddingRight: this.gutter/2+'px'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
 .col {
   height: 100px;
   color: #fff;
   text-align: center;
   line-height: 100px;
   padding: 0 10px;
   margin-bottom: 10px;
   background-color: dodgerblue;
   border:1px solid #fff;
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
 }
</style>