// bug report: https://github.com/vuejs/awesome-vue/pull/1028
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded
export function scrollIntoView (el, scrollParent) {
  if (el.scrollIntoViewIfNeeded) {
    el.scrollIntoViewIfNeeded(false) // alignToCenter=false
  } else {
    // should not use `el.scrollIntoView(false)` // alignToTop=false
    // bug report: https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move
    const diff = el.offsetTop - scrollParent.scrollTop
    if (diff < 0 || diff > scrollParent.offsetHeight - el.offsetHeight) {
      scrollParent = scrollParent || el.parentElement
      scrollParent.scrollTop = el.offsetTop
    }
  }
}

export function applyRange (range) {
  const selection = window.getSelection()
  if (selection) { // 容错
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
export function getRange () {
  const selection = window.getSelection()
  if (selection && selection.rangeCount > 0) {
    return selection.getRangeAt(0)
  }
}

export function getAtAndIndex (text, ats) {
  return ats.map((at) => {
    return { at, index: text.lastIndexOf(at) }
  }).reduce((a, b) => {
    return a.index > b.index ? a : b
  })
}

/* eslint-disable */
// http://stackoverflow.com/questions/26747240/plain-javascript-replication-to-offset-and-position
export function getOffset(element, target) {
    // var element = document.getElementById(element),
    //     target  = target ? document.getElementById(target) : window;
    target = target || window
    var offset = {top: element.offsetTop, left: element.offsetLeft},
        parent = element.offsetParent;
    while (parent != null && parent != target) {
       offset.left += parent.offsetLeft;
       offset.top  += parent.offsetTop;
       parent = parent.offsetParent;
    }
    return offset;
}
// http://stackoverflow.com/questions/3972014/get-caret-position-in-contenteditable-div
export function closest (el, predicate) {
  /* eslint-disable */
  do if (predicate(el)) return el;
  while (el = el && el.parentNode);
}
// http://stackoverflow.com/questions/15157435/get-last-character-before-caret-position-in-javascript
// 修复 "空格+表情+空格+@" range报错 应设(endContainer, 0)
// stackoverflow上的这段代码有bug
export function getPrecedingRange() {
  const r = getRange()
  if (r) {
    const range = r.cloneRange()
    range.collapse(true)
    // var el = closest(range.endContainer, d => d.contentEditable)
    // range.setStart(el, 0)
    range.setStart(range.endContainer, 0)
    return range
  }
}
/* eslint-enable */
