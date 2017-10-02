# Custom Templates

----

## Data structure

```js
members: [{
  avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  name: 'myrtie.green'
}, {
  avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
  name: '椿木'
}]
```

## Add a scoped slot as template

```html
<at :members="members" name-key="name">
  <template slot="item" scope="s">
    <img :src="s.item.avatar">
    <span v-text="s.item.name"></span>
  </template>
  <div class="editor" contenteditable v-html="html"></div>
</at>
```

## Demo

:::demo
```html
<template>
  <div class="demo-customtemplates">
    <at :members="members" name-key="name">
      <template slot="item" scope="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name"></span>
      </template>
      <div class="editor" contenteditable v-html="html"></div>
    </at>
  </div>
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
:::

<script>
let members = [{
  avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  name: 'myrtie.green'
}, {
  avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
  name: '椿木'
}]

export default {
  data () {
    return {
      html: 'Hello World! @myrtie.green .<br>@椿木 lol',
      members
    }
  }
}
</script>

<style lang="scss">
// override styles
.demo-customtemplates {
  .atwho-li {
    padding: 0 4px;
  }
  .atwho-li img {
    height: 100%;
    width: auto;
    -webkit-transform: scale(.8);
  }
  .atwho-li span {
    padding-left: 8px;
  }
}
</style>
