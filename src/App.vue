<template>
  <div id="app">
    <at :members="members">
      <div class="editor"
        contenteditable
        v-html="html"></div>
    </at>
  </div>
</template>

<script>
import At from './At.vue'

export default {
  components: { At },
  name: 'app',
  data () {
    return {
      members: [
        /* eslint-disable */
        "Roxie Miles","grace.carroll",
        "小浩",
        "Helena Perez","melvin.miller",
        "椿木",
        "myrtie.green","elsie.graham","Elva Neal",
        "肖逵",
        "amy.sandoval","katie.leonard","lottie.hamilton",
        /* eslint-enable */
      ],
      html: `
        <div>Awesome Electron&nbsp;<img src="static/awesome.svg"></div><div><img src="static/electron.svg"></div><div>Useful resources for creating apps with&nbsp;Electron</div><div>Inspired by the&nbsp;awesome&nbsp;list thing. You might also like&nbsp;awesome-nodejs.</div><div>Example apps</div><div>Some good apps written with Electron.</div><div>Open Source</div><div>Atom&nbsp;- Code editor.</div><div>Nuclide&nbsp;- Unified IDE.</div><div>Playback&nbsp;- Video player.</div>
      `.trim() // fix trailing abnormal nodes
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.editor {
  width: 400px;
  min-height: 200px;
  white-space: pre-wrap;
  border: solid 2px rgba(0,0,0,.5);
}
.editor img {
  max-width: 10em;
  vertical-align: bottom;
}
</style>
