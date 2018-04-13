// setup JSDOM
require('jsdom-global')()

// make expect available globally
global.expect = require('expect')

// window.getSelection not implemented
// https://github.com/jsdom/jsdom/issues/321
// https://github.com/jsdom/jsdom/issues/317
const noop = () => {}
window.getSelection = noop
document.getSelection = noop
