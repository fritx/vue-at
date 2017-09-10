# Props: More

PR of allowSpaces: [#18](https://github.com/fritx/vue-at/pull/18)

----

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| allowSpaces | Whether white-characters are involved while at-matching | Boolean | - | true |
| avoidEmail | Wheter to avoid at-triggered right after an '/[a-z0-9]/i' character | Boolean | - | true |
| hoverSelect | Wheter a member is selected on mouse-hover | Boolean | - | true |
| hideOnBlur | Whether to hide at-panel on editor blur | Boolean | - | true |

## FAQ

See: [#12](https://github.com/fritx/vue-at/issues/12)

> Mouse hover on the at-panel disturbs keyboard select.<br>
<br>
> If the mouse remains at the 3rd item on the list,
when we press the up/down keys,<br>
the list scrolls,<br>
but the 3rd place would keep getting selected unexpectedly.<br>
<br>
> A workaround to avoid this if you care much about it,<br>
is to disable the hover-selecting feature:

```html
<at :hover-select="false"></at>
```

----

See [#20](https://github.com/fritx/vue-at/issues/20)

> i wanted to ask another question.. is there a way to dismiss the suggestion
box by clicking anywere outside of the box?

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
