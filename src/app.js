import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './Button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  }
})

//单元测试
{
  const Constructor = Vue.extend(Button)  //把Button组件变成一个构造函数
  const button = new Constructor()  //变成一个实例
  button.$mount('#test')  //button实例挂载到test上
}