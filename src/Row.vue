<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Row.vue',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    computed: {
      rowStyle() {
        let {gutter} =this
        return {
          marginLeft:gutter && -gutter/2+'px',
          marginRight: -gutter && gutter/2+'px'
        }
      }
    },
    created() {
      // console.log(this.$children)
      //元素刚生成的时候没有儿子(内存里)
      console.log('row created')
    },
    mounted() {
      // console.log(this.$children)
      //元素挂载到页面上就有儿子
      console.log('row mounted')
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
.row {
  display: flex;
}
</style>