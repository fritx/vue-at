
# Textarea

----

Feature request of textarea: [#11](https://github.com/fritx/vue-at/issues/11)

## Import the textarea version

```js
import AtTa from 'vue-at/dist/vue-at-textarea'

export default {
  name: 'your-app',
  components: { AtTa }
}
```

## Wrap your textarea

```html
<template>
  <at-ta>
    <textarea class="your-editor"></textarea>
  </at-ta>
</template>
```

## Demo

:::demo
```html
<template>
  <at-ta :members="members">
    <textarea class="editor" v-text="text"></textarea>
  </at-ta>
</template>

<script>
import AtTa from 'vue-at/dist/vue-at-textarea'

export default {
  components: { AtTa },
  data () {
    return {
      text: 'Hello World! @Roxie Miles .\n@grace.carroll @小浩 lol',
      members: ['Roxie Miles', 'grace.carroll', '小浩']
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
      text: 'Hello World! @Roxie Miles .\n@grace.carroll @小浩 lol',
      members: ['Roxie Miles', 'grace.carroll', '小浩']
    }
  }
}
</script>
