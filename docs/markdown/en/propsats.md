# Props: Ats

----

PR of ats: [#17](https://github.com/fritx/vue-at/pull/17)

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| ats | Specify a list of "@" characters | Array | - | ['@'] |
| at | Specify a single "@" character, overriding 'ats' | String | - | - |

## FAQ

See: [#6](https://github.com/fritx/vue-at/issues/6)

> Quick question. Does it allow multiple chars at a time like at.js?<br>
Say, whatever '@' or ':' is there, pop up a suggestion box?

```html
<at :ats="['@', '＠', '~', ':', 'xx']"></at>
```

---

See [#23](https://github.com/fritx/vue-at/issues/23)

> So I'd like to bind @ to users, and # to something else, like here on Github even. Am I missing something here; it it not possible yet or is it missing from the docs.

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
