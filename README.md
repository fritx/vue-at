# vue-at

<img width="262" height="218" src="https://raw.githubusercontent.com/fritx/vue-at/master/WechatIMG1.jpeg">&nbsp;&nbsp;<img width="262" height="218" src="https://raw.githubusercontent.com/fritx/vue-at/master/WechatIMG2.jpeg">

Live Demo & Documentation: https://fritx.github.io/vue-at

*Docs is powered by [At-UI](https://github.com/AT-UI/at-ui).*

- [x] Chrome/Firefox/Edge/IE9~IE11
- [x] Plain-text based, no jQuery, no extra nodes
- [x] ContentEditable/Textarea
- [x] Avatars, custom templates
- [x] Vue2/Vue1

See also: [react-at][react-at]

## Motivation

[At.js][at.js] is awesome, but:

- It is based on jQuery and jQuery-Caret.
- It introduces extra node wrappers.
- It could be unstable on content edit/copy/paste.

Finally I ended up creating this.

```plain
npm i vue-at@2.x  # for Vue2
npm i vue-at@1.x  # for Vue1
```

```vue
<template>
  <at :members="members">
    <div contenteditable></div>
  </at>
</template>

<script>
import At from 'vue-at'

export default {
  components: { At },
  data () {
    return {
      members: ['Roxie Miles', 'grace.carroll', '小浩']
    }
  }
}
</script>

<style>
#app .atwho-view { /* more */ }
#app .atwho-ul { /* more */ }
</style>
```

## Textarea

```vue
<template>
  <at-textarea>
    <textarea></textarea>
  </at-textarea>
</template>

<script>
// import At from 'vue-at' // for content-editable
import AtTextarea from 'vue-at/dist/vue-at-textarea' // for textarea

export default {
  components: { AtTextarea }
}
</script>
```

```plain
npm i -S textarea-caret  # also, for textarea
```

## Custom Templates

```vue
<template>
  <at :members="members" name-key="name">
    <template slot="item" scope="s">
      <img :src="s.item.avatar">
      <span v-text="s.item.name"></span>
    </template>
    <div contenteditable></div>
  </at>
</template>

<script>
// ...
members: [{
  avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  name: 'myrtie.green'
}, {
  avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
  name: '椿木'
}]
</script>

<style>
#app .atwho-li { /* more */ }
#app .atwho-li img { /* more */ }
#app .atwho-li span { /* more */ }
</style>
```

### Custom Templates with Vue 1.x

There is no "scoped slot" feature in Vue 1.<br>
Use a "normal slot" with `data-` attribute instead.

```vue
<!-- vue-at@1.x for vue@1.x -->
<template slot="item">
  <img data-src="item.avatar">
  <span data-text="item.name"></span>
</template>
```

[react-at]: https://github.com/fritx/react-at
[at.js]: https://github.com/ichord/At.js
