
# V-Model

----

Feature requests: [#8](https://github.com/fritx/vue-at/issues/8#issuecomment-304666006), [#22](https://github.com/fritx/vue-at/issues/22#issuecomment-338363789), [#26](https://github.com/fritx/vue-at/issues/26), [#29](https://github.com/fritx/vue-at/issues/29), [#32](https://github.com/fritx/vue-at/issues/32#issuecomment-355378888), [#41](https://github.com/fritx/vue-at/issues/41#issuecomment-369471368), [#43](https://github.com/fritx/vue-at/issues/43)

PR: [#43](https://github.com/fritx/vue-at/issues/43)

## Using V-Model (Recommended)

Notice that `<editor v-model>` could be buggy,<br>
and should be like `<at v-model><editor></at>` instead.

```html
<at v-model="html">
  <div contenteditable></div>
</at>

<at-ta v-model="text">
  <textarea></textarea>
</at-ta>
```

## Demo

:::demo
```html
<template>
  <at :members="members" v-model="html">
    <div contenteditable class="editor"></div>
  </at>
  <pre class="output">
    <code v-text="output1"></code>
  </pre>

  <at-ta :members="members" v-model="text">
    <textarea class="editor"></textarea>
  </at-ta>
  <pre class="output">
    <code v-text="output2"></code>
  </pre>
</template>

<script>
import AtTa from 'vue-at/dist/vue-at-textarea'
import At from 'vue-at/dist/vue-at'

export default {
  components: { At, AtTa },
  data () {
    return {
      html: 'editable v-model: @Roxie Miles .<br>@grace.carroll @小浩 lol',
      text: 'textarea v-model: @Roxie Miles .\n@grace.carroll @小浩 lol',
      members: ['Roxie Miles', 'grace.carroll', '小浩']
    }
  },
  computed: {
    output1 () {
      return JSON.stringify({ html: this.html }, null, 2)
    },
    output2 () {
      return JSON.stringify({ text: this.text }, null, 2)
    }
  }
}
</script>
```
:::

<script>
export default {
  data () {
    return {
      html: 'editable v-model: @Roxie Miles .<br>@grace.carroll @小浩 lol',
      text: 'textarea v-model: @Roxie Miles .\n@grace.carroll @小浩 lol',
      members: ['Roxie Miles', 'grace.carroll', '小浩']
    }
  },
  computed: {
    output1 () {
      return JSON.stringify({ html: this.html }, null, 2)
    },
    output2 () {
      return JSON.stringify({ text: this.text }, null, 2)
    }
  }
}
</script>
