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

import chai from 'chai'

const expect = chai.expect

//单元测试
//用例1
{
  const Constructor = Vue.extend(Button)  //把Button组件变成一个构造函数
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })  //变成一个实例
  vm.$mount('#test')  //button实例挂载到test上
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-setting')
  vm.$el.remove() //删除button元素
  vm.$destroy()  //删除button对象
}

//用例2
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove() //删除button元素
  vm.$destroy()  //删除button对象
}

//用例3
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove() //删除button元素
  vm.$destroy()  //删除button对象
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove() //删除button元素
  vm.$destroy()  //删除button对象
}

//用例4
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  vm.$mount()
  vm.$on('click',function () {
    expect(1).to.eq(1)  //希望这个函数被执行，这个方法是错的
  })
  let button = vm.$el
  button.click()
}