export function applyRange(range) {
  const selection = window.getSelection()
  if (selection) { // 容错
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
export function getRange() {
  const selection = window.getSelection()
  if (selection && selection.rangeCount > 0) {
    return selection.getRangeAt(0)
  }
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
export function getPrecedingRange() {
  const r = getRange()
  if (r) {
    const range = r.cloneRange()
    range.collapse(true)
    var el = closest(range.endContainer, d => d.contentEditable)
    range.setStart(el, 0)
    return range
  }
}
/* eslint-enable */
