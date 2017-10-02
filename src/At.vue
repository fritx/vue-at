<script>
import {
  closest, getOffset, getPrecedingRange,
  getRange, applyRange,
  scrollIntoView, getAtAndIndex
} from './util'
import AtTemplate from './AtTemplate.vue'

export default {
  name: 'At',
  mixins: [AtTemplate],
  props: {
    at: {
      type: String,
      default: null
    },
    ats: {
      type: Array,
      default: () => ['@']
    },
    loop: {
      type: Boolean,
      default: true
    },
    allowSpaces: {
      type: Boolean,
      default: true
    },
    avoidEmail: {
      type: Boolean,
      default: true
    },
    hoverSelect: {
      type: Boolean,
      default: true
    },
    members: {
      type: Array,
      default: () => []
    },
    nameKey: {
      type: String,
      default: ''
    },
    filterMatch: {
      type: Function,
      default: (name, chunk, at) => {
        // match at lower-case
        return name.toLowerCase()
          .indexOf(chunk.toLowerCase()) > -1
      }
    },
    deleteMatch: {
      type: Function,
      default: (name, chunk) => {
        return name === chunk
      }
    }
  },

  data () {
    return {
      hasComposition: false,
      atwho: null
    }
  },
  computed: {
    atItems () {
      return this.at ? [this.at] : this.ats
    },
    
    style () {
      if (this.atwho) {
        const { list, cur, x, y } = this.atwho
        const { wrap } = this.$refs
        if (wrap) {
          const offset = getOffset(wrap)
          const left = x + window.pageXOffset - offset.left + 'px'
          const top = y + window.pageYOffset - offset.top + 'px'
          return { left, top }
        }
      }
      return null
    }
  },
  watch: {
    'atwho.cur' (index) {
      if (index != null) { // cur index exists
        this.$nextTick(() => {
          this.scrollToCur()
        })
      }
    }
  },

  methods: {
    itemName (v) {
      const { nameKey } = this
      return nameKey ? v[nameKey] : v
    },
    isCur (index) {
      return index === this.atwho.cur
    },

    handleItemHover (e) {
      if (this.hoverSelect) {
        this.selectByMouse(e)
      }
    },
    handleItemClick (e) {
      this.selectByMouse(e)
      this.insertItem()
    },
    handleDelete (e) {
      const range = getPrecedingRange()
      if (range) {
        const { atItems, members, deleteMatch, itemName } = this
        const text = range.toString()
        const { at, index } = getAtAndIndex(text, atItems)
        if (index > -1) {
          const chunk = text.slice(index + at.length, -1)
          const has = members.some(v => {
            const name = itemName(v)
            return deleteMatch(name, chunk)
          })
          if (has) {
            e.preventDefault()
            e.stopPropagation()
            const r = getRange()
            if (r) {
              r.setStart(r.endContainer, index)
              r.deleteContents()
              applyRange(r)
              this.handleInput()
            }
          }
        }
      }
    },
    handleKeyDown (e) {
      const { atwho } = this
      if (atwho) {
        if (e.keyCode === 38 || e.keyCode === 40) { // ↑/↓
          if (!(e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            e.stopPropagation()
            this.selectByKeyboard(e)
          }
          return
        }
        if (e.keyCode === 13) { // enter
          this.insertItem()
          e.preventDefault()
          e.stopPropagation()
          return
        }
        if (e.keyCode === 27) { // esc
          this.closePanel()
          return
        }
      }

      const isChar = e.keyCode >= 48 && e.keyCode <= 90
      if (isChar) {
        setTimeout(this.handleInput, 50)
      }

      if (e.keyCode === 8) {
        this.handleDelete(e)
      }
    },

    // compositionStart -> input -> compositionEnd
    handleCompositionStart () {
      this.hasComposition = true
    },
    handleCompositionEnd () {
      this.hasComposition = false
      this.handleInput()
    },
    handleInput () {
      if (this.hasComposition) return
      const range = getPrecedingRange()
      if (range) {
        const { atItems, avoidEmail, allowSpaces } = this
        
        let show = true
        const text = range.toString()
  
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
          const matched = members.filter(v => {
            const name = itemName(v)
            return filterMatch(name, chunk, at)
          })
          if (matched.length) {
            this.openPanel(matched, range, index, at)
          } else {
            this.closePanel()
          }
        }
      }
    },

    closePanel () {
      if (this.atwho) {
        this.atwho = null
      }
    },
    openPanel (list, range, offset, at) {
      const fn = () => {
        const r = range.cloneRange()
        r.setStart(r.endContainer, offset + at.length) // 从@后第一位开始
        // todo: 根据窗口空间 判断向上或是向下展开
        const rect = r.getClientRects()[0]
        this.atwho = {
          range,
          offset,
          list,
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

    scrollToCur () {
      const curEl = this.$refs.cur[0]
      const scrollParent = curEl.parentElement.parentElement // .atwho-view
      scrollIntoView(curEl, scrollParent)
    },
    selectByMouse (e) {
      const el = closest(e.target, d => {
        return d.getAttribute('data-index')
      })
      const cur = +el.getAttribute('data-index')
      this.atwho = {
        ...this.atwho,
        cur
      }
    },
    selectByKeyboard (e) {
      const offset = e.keyCode === 38 ? -1 : 1
      const { cur, list } = this.atwho
      const nextCur = this.loop
        ? (cur + offset + list.length) % list.length
        : Math.max(0, Math.min(cur + offset, list.length - 1))
      this.atwho = {
        ...this.atwho,
        cur: nextCur
      }
    },

    // todo: 抽离成库并测试
    insertText (text, r) {
      r.deleteContents()
      const node = r.endContainer
      if (node.nodeType === Node.TEXT_NODE) {
        const cut = r.endOffset
        node.data = node.data.slice(0, cut) +
          text + node.data.slice(cut)
        r.setEnd(node, cut + text.length)
      } else {
        const t = document.createTextNode(text)
        r.insertNode(t)
        r.setEndAfter(t)
      }
      r.collapse(false) // 参数在IE下必传
      applyRange(r)
    },
    insertItem () {
      const { range, offset, list, cur } = this.atwho
      const { atItems, itemName } = this
      const r = range.cloneRange()
      const text = range.toString()
      const { at, index } = getAtAndIndex(text, atItems)
      const start = index + at.length // 从@后第一位开始
      r.setStart(r.endContainer, start)
      // hack: 连续两次 可以确保click后 focus回来 range真正生效
      applyRange(r)
      applyRange(r)
      const t = itemName(list[cur]) + ' '
      this.insertText(t, r)
      this.handleInput()
    }
  }
}
</script>
