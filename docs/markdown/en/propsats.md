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
