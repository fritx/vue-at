# vue-at

<img width="400" height="335" src="https://raw.githubusercontent.com/fritx/react-at/dev/shot.png">

- [x] Filter/Scroll/Insert/Delete
- [x] Keyboard/Mouse events
- [x] Plain-text based, no jQuery, no extra nodes
- [x] ContentEditable
- [ ] Avatar
- [x] Vue2
- [ ] Vue1

See also: [react-at][react-at]

## Motivation

[At.js][at.js] is awesome (4000+ stars), but:

- It is [buggy][buggy].
- It seems like out of maintainment.
- It is based on jQuery.
- Its code is like "Spaghetti" and hard to read.

Finally I lost interest in [patching it][buggy] and ended up creating this.

```plain
npm i vue-at@2.x  # for Vue2
npm i vue-at@1.x  # for Vue1
```

```vue
<style>
.atwho-view { /* more styles */ }
.atwho-view ul { /* more styles */ }
</style>

<template>
  <at members={members}>
    <div contentEditable />
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
```

[react-at]: https://github.com/fritx/react-at
[at.js]: https://github.com/ichord/At.js
[buggy]: https://github.com/ichord/At.js/issues/411#issuecomment-256662090
