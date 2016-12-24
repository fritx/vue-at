<style lang="scss" src="./At.scss"></style>

<template>
  <div ref="wrap"
    class="atwho-wrap"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
    @input="handleInput"
    @keydown="handleKeyDown"
  >
    <div v-if="atwho"
      class="atwho-panel"
      :style="style"
    >
      <div class="atwho-inner">
        <div class="atwho-view">
          <ul class="atwho-ul">
            <li v-for="(item, index) in atwho.list"
              class="atwho-li"
              :class="isCur(index) && 'atwho-cur'"
              :ref="isCur(index) && 'cur'"
              :data-index="index"
              @mouseenter="handleItemHover"
              @click="handleItemClick"
            >
              <span v-text="item"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {
  closest, getOffset, getPrecedingRange,
  getRange, applyRange
} from './util'

const at = '@'

export default {
  name: 'At',
  props: {
    members: {
      required: true,
      type: Array
    }
  },

  data () {
    return {
      hasComposition: false,
      atwho: null
    }
  },
  computed: {
    style () {
      if (this.atwho) {
        const { list, cur, x, y } = this.atwho
        const { wrap } = this.$refs
        if (wrap) {
          const offset = getOffset(wrap)
          const left = x - offset.left + 'px'
          const top = y - offset.top + 'px'
          return { left, top }
        }
      }
      return null
    }
  },

  methods: {
    isCur (index) {
      return index === this.atwho.cur
    },

    handleItemClick () {
      this.selectItem()
    },
    handleItemHover (e) {
      const el = closest(e.target, d => d.dataset.index)
      const cur = +el.dataset.index
      this.atwho ={
        ...this.atwho,
        cur
      }
    },
    handleDelete (e) {
      const range = getPrecedingRange()
      if (range) {
        const text = range.toString()
        const index = text.lastIndexOf(at)
        if (index > -1) {
          const chunk = text.slice(index + 1, -1)
          const { members } = this
          const has = members.indexOf(chunk) > -1
          if (has) {
            e.preventDefault()
            e.stopPropagation()
            const r = getRange()
            if (r) {
              r.setStart(r.endContainer, index)
              r.deleteContents()
              applyRange(r)
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
            const offset = e.keyCode === 38 ? -1 : 1
            const { members } = this
            const { cur } = atwho
            this.atwho = {
              ...this.atwho,
              cur: (cur + offset + members.length ) % members.length,
            }
            this.$nextTick(() => {
              // this.$refs.cur.scrollIntoViewIfNeeded()
              this.$refs.cur[0].scrollIntoViewIfNeeded()
            })
          }
          return
        }
        if (e.keyCode === 13) { // enter
          this.selectItem()
          e.preventDefault()
          e.stopPropagation()
          return
        }
        if (e.keyCode === 27) { // esc
          this.closePanel()
          return
        }
      }
      setTimeout(this.handleInput, 50)

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
        let show = true
        const text = range.toString()
        const index = text.lastIndexOf(at)
        if (index < 0) show = false
        const prev = text[index - 1]

        // 上一个字符不能为字母数字 避免与邮箱冲突
        if (/^[a-z0-9]$/i.test(prev)) show = false
        const chunk = text.slice(index + 1)
        // chunk以空白字符开头不匹配 避免`@ `也匹配
        if (/^\s/.test(chunk)) show = false

        if (!show) {
          this.closePanel()
        } else {
          const chunk_l = chunk.toLowerCase()
          const { members } = this
          const matched = members.filter(item => {
            // match at lower-case
            return item.toLowerCase().indexOf(chunk_l) > -1
          })
          if (matched.length) {
            this.openPanel(matched, range, index)
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
    openPanel (list, range, offset) {
      const fn = () => {
        const r = range.cloneRange()
        r.setStart(r.endContainer, offset + 1) // 从@后第一位开始
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

    selectItem () {
      const { range, offset, list, cur } = this.atwho
      const r = range.cloneRange()
      r.setStart(r.endContainer, offset + 1) // 从@后第一位开始
      // hack: 连续两次 可以确保click后 focus回来 range真正生效
      applyRange(r)
      applyRange(r)
      document.execCommand('insertText', 0, list[cur] + ' ')
    }
  }
}
</script>
