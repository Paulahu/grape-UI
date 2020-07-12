const expect = chai.expect
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {  // BDD 行为驱动测试(一种行为描述）
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(function () {
      vm.$destroy()
    })
    it('可以接受 value', function () {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })

    it('可以接受 disabled', function () {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('可以接受 readonly', function () {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('可以接受 error', function () {
      vm = new Constructor({
        propsData: {
          error: '123'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-note')
      const errorMessage = vm.$el.querySelector('.error-message')
      expect(errorMessage.innerText).to.equal('123')
    })
  })

  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(function () {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', function () {
      ['change', 'input', 'focus', 'blur'].forEach(item => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake() //sinon是一个库，调用他的欺骗函数
          vm.$on(item, callback)
          //触发input的change事件
          let event = new Event(item)
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith(event)  //期待回调调用，且同时传的第一个参数是event
        }
      )
    })
  })
})