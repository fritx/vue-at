
# Quickstart

----

## Install from npm

```sh
npm install -S vue-at@2.x  # for Vue 2.x
```

## Import to your app

```js
import At from 'vue-at'

export default {
  name: 'your-app',
  components: { At }
}
```

## Wrap your editor

```html
<template>
  <at :members="members">
    <div class="your-editor" contenteditable></div>
  </at>
</template>
```

## Demo

:::demo
```html
<template>
  <at :members="members">
    <div class="editor" contenteditable v-html="html"></div>
  </at>
</template>

<script>
import At from 'vue-at'

export default {
  components: { At },
  data () {
    return {
      html: 'Hello World! @Roxie Miles<br>@grace.carroll @小浩 lol',
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
      html: 'Hello World! @Roxie Miles<br>@grace.carroll @小浩 lol',
      members: ['Roxie Miles', 'grace.carroll', '小浩']
    }
  }
}
</script>

<style scoped>
.editor {
  width: 400px;
  min-height: 80px;
  white-space: pre-wrap;
  border: solid 1px rgba(0,0,0,.3);
  padding: .4em;
}
</style>
