import AtTa from '../src/AtTextarea.vue'
import At from '../src/At.vue'

export const adaptors = [
  (() => {
    const type = 'textarea'
    const Component = AtTa
    const targetHtml = '<textarea></textarea>'
    const targetSelector = 'textarea'
    return {
      type,
      Component,
      targetHtml,
      targetSelector,
      wrapperExtension: {
        findTarget () {
          return this.find(targetSelector)
        },
        getContent () {
          return this.findTarget().element.value
        },
        setContent (value) {
          this.findTarget().element.value = value
        }
      }
    }
  })(),
  (() => {
    const type = 'contenteditable'
    const Component = At
    const targetHtml = '<div contenteditable></div>'
    const targetSelector = '[contenteditable]'
    return {
      type,
      Component,
      targetHtml,
      targetSelector,
      wrapperExtension: {
        findTarget () {
          return this.find(targetSelector)
        },
        getContent () {
          return this.findTarget().element.innerHTML
        },
        setContent (value) {
          this.findTarget().element.innerHTML = value
        }
      }
    }
  })()
]
