<template>
  <div class="col"
       :class="colClass"
       :style="colStyle">
    <div class="inside">
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
   .inside {
     height: 50px;
     color: #fff;
     text-align: center;
     line-height: 50px;
     padding: 0 10px;
     margin-bottom: 10px;
     background: dodgerblue;
     border:1px solid #fff;
   }
 }
</style>