
# Change Log

----

`Vue-At` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

## <span class="title-version">v2.4.0-beta</span> - 2018-03-04

- Merge branch 'feat/v-model' into dev, ref [#29](https://github.com/fritx/vue-at/issues/29), [#41](https://github.com/fritx/vue-at/issues/41), [#43](https://github.com/fritx/vue-at/issues/43)
  - docs: demo switched to v-model
  - feat(v-model): support both editable and textarea
  - fix(v-model): textarea v-model should be optional (non-breaking), ref [#38](https://github.com/fritx/vue-at/pull/38#issuecomment-363238410)
- Merge branch 'Brimstedt-dev' into feat/v-model (by [@Brimstedt](https://github.com/Brimstedt))
  - handled changed values
  - implement v-model

## <span class="title-version">v2.3.2</span> - 2018-03-03

- Merge branch 'fix/vueify-scss' into dev
  - chore: switched to uglifyjs-webpack-plugin 1.x, ref [vuejs-templates/webpack@webpack.prod.conf](https://github.com/vuejs-templates/webpack/blob/cd4d7d957c9af3d37092c79bf490b56b8d88b108/template/build/webpack.prod.conf.js#L37)
  - fix(vueify): apply uglifyjs when build, to support vueify (package size would reduce)
  - chore: remove At.css in favor of uglifyjs to work with vueify, ref [#37](https://github.com/fritx/vue-at/pull/37#issuecomment-361233085)
- Merge branch 'Alideniz-dev' into fix/vueify-scss (by [@Alideniz](https://github.com/Alideniz))
  - At.scss compiled to css

## <span class="title-version">v2.3.1</span> - 2017-12-16

- Emit at event only when chunk isn't empty (by [@AlexanderMisel](https://github.com/fritx/vue-at/commits?author=AlexanderMisel))
- Added support for vue-at inside scrolling elements (by [@jezzdk](https://github.com/fritx/vue-at/commits?author=jezzdk))
- readme: recommend `vue1-at` for vue 1.x instead
-	fix(ie): take 'backspace' in ie9 textarea, ref [#22](https://github.com/fritx/vue-at/issues/22)
- fix(input): event passed as arg 'keep' in handleInput by mistake

## <span class="title-version">v2.3.0</span> - 2017-10-21

- Merge branch 'feat/emit-at' into dev
  - fix(emit): rm has-at event as it is called too frequently
  - feat(emit): $emit('at') on at trigger, ref [#14](https://github.com/fritx/vue-at/issues/14), [#16](https://github.com/fritx/vue-at/issues/16), could be used for remote request
- fix(delete): correct default deleteMatch and add prop 'suffix'
- fix(delete): call handleInput within handleDelete 'n fix dataset.index for IE
- fix(range): regression bug of handleDelete 'n improve insertText methods, ref #22
- docs: 'at-textarea' => 'at-ta', for simplicity 'n avoiding conflicts with at-ui

## <span class="title-version">v2.2.5</span> - 2017-09-30

- feat(loop): add prop 'loop' while up/down selecting
- fix(textarea): consider el.offset top/left also

## <span class="title-version">v2.2.4</span> - 2017-09-20

- fix(textarea): at-panel offset when textarea shows scrollbar, ref [#21](https://github.com/fritx/vue-at/issues/21)

## <span class="title-version">v2.2.3</span> - 2017-09-10

- docs: added statement for new at-ui docs
- ~~fix(textarea): correct at-panel offset calc~~ (not fixed)

## <span class="title-version">v2.2.2</span> - 2017-08-23

- refactor(textarea): replaced object-spreading with vue-extends
- fix(demo): fixed at-panel position on mobile via meta-viewport
- rm(dep): removed textarea-caret in optionalDeps

## <span class="title-version">v2.2.1</span> - 2017-08-13

- fix(deps): move textarea-caret to optionalDeps
- feat(build): add uglifyjs to gh-pages demo 

## <span class="title-version">v2.2.0</span> - 2017-08-13

- docs(textarea): add usage for textarea, ref [#11](https://github.com/fritx/vue-at/issues/11)
- Merge branch 'merge/gh11-textarea' into dev
  - docs(textarea): add usage for textarea, ref [#11](https://github.com/fritx/vue-at/issues/11)
  - wip(textarea): move textarea-caret in peerDeps
  - fix(ats): add missing `at.length`, ref [#17](https://github.com/fritx/vue-at/issues/17)
  - wip(textarea): openPanel + insertItem + handleDelete

## ...

<style scoped>
  .title-version {
    color: #4F7DE2;
    /* font-size: .9em; */
  }
</style>
