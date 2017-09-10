# Props: Matching

----

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| filterMatch | Whether an item should be listed when at-triggered | Function | - | `(name, chunk, at) => name.toLowerCase().indexOf(chunk.toLowerCase()) > -1` |
| deleteMatch | Whether an item should be removed when hitting "delete" | Function | - | `(name, chunk) => name === chunk` |

## FAQ

See: [#20](https://github.com/fritx/vue-at/issues/20)

> is it possible to make the members search look in first letters instead of in the hole word?

```html
<template>
  <at :filter-match="filterMatch"></at>
</template>

<script>
let filterMatch = (name, chunk) => name
  .toLowerCase().indexOf(chunk.toLowerCase()) === 0
// ...
</script>
```
