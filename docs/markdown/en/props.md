# Props

----

PR of ats: [#17](https://github.com/fritx/vue-at/pull/17)<br>
PR of allowSpaces: [#18](https://github.com/fritx/vue-at/pull/18)

| Prop | Description | Type | Default |
| ---- | ----------- | ---- | ------- |
| ats | Specify a list of "@" characters | Array | `['@']` |
| at | Specify a single "@" character, overriding 'ats' | String | - |
| filterMatch | Whether an item should be listed when at-triggered | Function | <sup>[1]<sup> |
| deleteMatch | Whether an item should be removed when hitting "delete" | Function | <sup>[2]<sup> |
| allowSpaces | Whether white-characters are involved while at-matching | Boolean | true |
| avoidEmail | Wheter to avoid at-triggered right after an "/[a-z0-9]/i" character | Boolean | true |
| hoverSelect | Wheter a member is selected on mouse-hover | Boolean | true |
| loop | Whether to loop while up/down selecting | Boolean | true |
| hideOnBlur<sup>(wip)</sup> | Whether to hide at-panel on editor blur | Boolean | true |

#### Default filterMatch<sup>[1]</sup>

```js
(name, chunk, at) => {
  return name.toLowerCase().indexOf(chunk.toLowerCase()) > -1
}
```

#### Default deleteMatch<sup>[2]</sup>

```js
(name, chunk) => name === chunk
```
