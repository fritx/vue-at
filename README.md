# vue1-at

**Notice: this is Vue 1.x version of [vue-at](vue-at)**

```plain
npm i vue-at@2.x  # for Vue2
npm i vue-at@1.x  # for Vue1 (legacy)
npm i vue1-at  # for Vue1  <----
```

```vue
<template>
  <at :members="members">
    <div contenteditable></div>
  </at>
</template>

<script>
import At from 'vue1-at'

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
  <at-ta>
    <textarea></textarea>
  </at-ta>
</template>

<script>
// import At from 'vue1-at' // for content-editable
import AtTa from 'vue1-at/dist/vue-at-textarea' // for textarea

export default {
  components: { AtTa }
}
</script>
```

```plain
npm i -S textarea-caret  # also, for textarea
```

### Custom Templates with Vue 1.x

There is no "scoped slot" feature in Vue 1.<br>
Use a "normal slot" with `data-` attribute instead.

```vue
<!-- vue1-at for vue@1.x -->
<template slot="item">
  <img data-src="item.avatar">
  <span data-text="item.name"></span>
</template>
```

[vue-at]: https://github.com/fritx/vue-at
