<script>
import At from './At.vue'
import getCaretCoordinates from 'textarea-caret'
import { getAtAndIndex } from './util'

export default {
  extends: At,
  name: 'AtTextarea',
  computed: {
    style () {
      if (this.atwho) {
        const { list, cur, x, y } = this.atwho
        const { wrap } = this.$refs
        const el = this.$el.querySelector('textarea')
        if (wrap) {
          const left = x + el.offsetLeft - el.scrollLeft + 'px'
          const top = y + el.offsetTop - el.scrollTop + 'px'
          return { left, top }
        }
      }
      return null
    }
  },
  methods: {
    handleValueUpdate (value) {
      const el = this.$el.querySelector('textarea')
      if (value !== el.value) { // avoid range reset
        el.value = value
      }
    },

    handleDelete (e) {
      const el = this.$el.querySelector('textarea')
      const text = el.value.slice(0, el.selectionEnd)
      if (text) {
        const { atItems, members, suffix, deleteMatch, itemName } = this
        const { at, index } = getAtAndIndex(text, atItems)
        if (index > -1) {
          const chunk = text.slice(index + at.length)
          const has = members.some(v => {
            const name = itemName(v)
            return deleteMatch(name, chunk, suffix)
          })
          if (has) {
            el.value = el.value.slice(0, index) +
              el.value.slice(el.selectionEnd - 1)
            el.selectionStart = index + 1
            el.selectionEnd = index + 1
            this.handleInput()
          }
        }
      }
    },

    handleInput (keep) {
      if (this.hasComposition) return
      const el = this.$el.querySelector('textarea')
      this.$emit('input', el.value)

      const text = el.value.slice(0, el.selectionEnd)
      if (text) {
        const { atItems, avoidEmail, allowSpaces } = this
        let show = true
        const { at, index } = getAtAndIndex(text, atItems)
        if (index < 0) show = false
        const prev = text[index - 1]
        const chunk = text.slice(index + at.length, text.length)
        if (avoidEmail) {
          // 上一个字符不能为字母数字 避免与邮箱冲突
          // 微信则是避免 所有字母数字及半角符号
          if (/^[a-z0-9]$/i.test(prev)) show = false
        }
        if (!allowSpaces && /\s/.test(chunk)) {
          show = false
        }

        // chunk以空白字符开头不匹配 避免`@ `也匹配
        if (/^\s/.test(chunk)) show = false
        if (!show) {
          this.closePanel()
        } else {
          const { members, filterMatch, itemName } = this
          if (!keep) { // fixme: should be consistent with At.vue
            this.$emit('at', chunk)
          }
          const matched = members.filter(v => {
            const name = itemName(v)
            return filterMatch(name, chunk, at)
          })
          if (matched.length) {
            this.openPanel(matched, chunk, index, at, keep)
          } else {
            this.closePanel()
          }
        }
      } else {
        this.closePanel()
      }
    },

    openPanel (list, chunk, offset, at) {
      const fn = () => {
        const el = this.$el.querySelector('textarea')
        const atEnd = offset + at.length // 从@后第一位开始
        const rect = getCaretCoordinates(el, atEnd)
        this.atwho = {
          chunk,
          offset,
          list,
          atEnd,
          x: rect.left,
          y: rect.top - 4,
          cur: 0, // todo: 尽可能记录
        }
      }
      if (this.atwho) {
        fn()
      } else { // 焦点超出了显示区域 需要提供延时以移动指针 再计算位置
        setTimeout(fn, 10)
      }
    },

    // todo: 抽离成库并测试
    insertText (text, ta) {
      const start = ta.selectionStart
      const end = ta.selectionEnd
      ta.value = ta.value.slice(0, start) +
        text + ta.value.slice(end)
      const newEnd = start + text.length
      ta.selectionStart = newEnd
      ta.selectionEnd = newEnd
    },
    insertItem () {
      const { chunk, offset, list, cur, atEnd } = this.atwho
      const { suffix, atItems, itemName } = this
      const el = this.$el.querySelector('textarea')
      const text = el.value.slice(0, atEnd)
      const { at, index } = getAtAndIndex(text, atItems)
      const start = index + at.length // 从@后第一位开始
      el.selectionStart = start
      el.focus() // textarea必须focus回来
      const curItem = list[cur]
      const t = itemName(curItem) + suffix
      this.insertText(t, el)
      this.$emit('insert', curItem)
      this.handleInput()
    }
  }
}
</script>
