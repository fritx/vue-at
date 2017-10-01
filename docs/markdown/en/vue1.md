
# Use Vue-At with Vue 1.x

----

Feature request of Vue-1 support: [#4](https://github.com/fritx/vue-at/issues/4)

## Install from npm

```sh
npm install -S vue-at@1.x  # for Vue 1.x
```

## Custom Templates with Vue 1.x

There is no "scoped slot" feature in Vue 1.<br>
Use a "normal slot" with data- attribute instead.

```html
<!-- vue-at@1.x for vue@1.x -->
<template slot="item">
  <img data-src="item.avatar">
  <span data-text="item.name"></span>
</template>
```
