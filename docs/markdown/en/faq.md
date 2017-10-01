# FAQ

----

### Multiple data sets composition

> So I'd like to bind @ to users, and # to something else,<br>
like here on Github even. Am I missing something here;<br>
~~it~~(is) it not possible yet or is it missing from the docs.<br>
-- [#23](https://github.com/fritx/vue-at/issues/23)

```html
<at at="#" :memebrs="issues">
  <at at="@" :members="users">
    <editor></editor>
  </at>
</at>
```

:::demo
```html
<template>
  <at at="#" :members="issues">
    <at at="@" :members="users">
      <div class="editor" contenteditable v-html="html"></div>
    </at>
  </at>
</template>

<script>
import At from 'vue-at'

export default {
  components: { At },
  data () {
    return {
      html: 'Hello World! @Roxie Miles #22.<br>@grace.carroll @小浩 #104 lol',
      issues: ['1', '22', '104'],
      users: ['Roxie Miles', 'grace.carroll', '小浩']
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
      html: 'Hello World! @Roxie Miles #22 .<br>@grace.carroll @小浩 #104 lol',
      issues: ['1', '22', '104'],
      users: ['Roxie Miles', 'grace.carroll', '小浩']
    }
  }
}
</script>

### Hide on blur

> i wanted to ask another question..<br>
is there a way to dismiss the suggestion<br>
box by clicking anywere outside of the box?<br>
-- [#20](https://github.com/fritx/vue-at/issues/20)

```html
<at ref="at">
  <div class="editor" @focus="handleFocus"
    @blur="handleBlur"></div>
</at>

<script>
export default {
  data () {
    return {
      blurTimer: null,
      hideOnBlur: true
    }
  },
  methods: {
    handleFocus () {
      if (this.hideOnBlur) {
        clearTimeout(this.blurTimer)
      }
    },
    handleBlur () {
      if (this.hideOnBlur) {
        this.blurTimer = setTimeout(()=>{
          this.$refs.at.closePanel()
        }, 1500)
      }
    }
  }
}
</script>
```

### Match in first letters

> is it possible to make the members search look in<br>
first letters instead of in the ~~hole~~(whole) word?<br>
-- [#20](https://github.com/fritx/vue-at/issues/20)

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

### Hover select

> Mouse hover on the at-panel disturbs keyboard select.<br>
<br>
> If the mouse remains at the 3rd item on the list,
when we press the up/down keys,<br>
the list scrolls,<br>
but the 3rd place would keep getting selected unexpectedly.<br>
<br>
> A workaround to avoid this if you care much about it,<br>
is to disable the hover-selecting feature:<br>
-- [#12](https://github.com/fritx/vue-at/issues/12)

```html
<at :hover-select="false"></at>
```

### Multiple at chars

> Quick question. Does it allow multiple chars at a time like at.js?<br>
Say, whatever '@' or ':' is there, pop up a suggestion box?<br>
-- [#6](https://github.com/fritx/vue-at/issues/6)

```html
<at :ats="['@', '＠', '~', ':', 'xx']"></at>
```
