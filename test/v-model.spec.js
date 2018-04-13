import { mount } from '@vue/test-utils'
import Vue from 'vue';
import { adaptors } from './common'

adaptors.forEach(a => {
  describe(`v-model - ${a.type}`, () => {
    console.log('a', a.type)
    const originalContent = 'Original text..'
    let wrapper

    before(() => {
      const Container = Vue.extend({
        template: `<at v-model="content">${a.targetHtml}</at>`,
        components: { At: a.Component },
        data () {
          return { content: originalContent }
        }
      })
      wrapper = mount(Container)
      Object.assign(wrapper, a.wrapperExtension)
    })

    it('initializes value', () => {
      expect(wrapper.getContent()).toBe(originalContent)
    })

    it('renders value', () => {
      const nextContent = 'Changed by model..'
      wrapper.setData({ content: nextContent })
      expect(wrapper.getContent()).toBe(nextContent)
    })

    it('emits value', () => {
      const nextContent = 'Changed by user..'
      wrapper.setContent(nextContent)
      wrapper.findTarget().trigger('input')
      expect(wrapper.vm.content).toBe(nextContent)
    })
  })
})
