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
    loading:false,
    loading1: false,
    loading2: false,
    loading3: false,
  }
})

import chai from 'chai'
import spies from 'chai-spies'

const expect = chai.expect
chai.use(spies)

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
  let spy = chai.spy(function () {})
  vm.$on('click',spy) //希望这个函数执行
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}