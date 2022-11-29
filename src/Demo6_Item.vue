<template>
  <li class="atwho-li"
    :class="index === source.cur && 'atwho-cur'"
    :data-index="index"
    @mouseenter="$parent.$parent.$emit('item-hover', $event)"
  >{{ source.name }}</li>
</template>

<script>
  export default {
    name: 'item-component',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>
