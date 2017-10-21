
# Change Log

----

`Vue-At` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

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
