<template>
  <div id="app">
    <at :members="members" name-key="name">
      <!-- custom: same as default slot -->
      <!-- <template slot="item" scope="s">
        <span v-text="s.item"></span>
      </template> -->

      <!-- custom: with avatars -->
      <template slot="item" scope="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name"></span>
      </template>

      <textarea class="editor"
        v-text="html"></textarea>
    </at>
  </div>
</template>

<script>
// import At from 'vue-at'
// import At from '../dist'
import At from './At.vue'

let members = [
  /* eslint-disable */
  "Roxie Miles","grace.carroll",
  "小浩",
  "Helena Perez","melvin.miller",
  "椿木",
  "myrtie.green","elsie.graham","Elva Neal",
  "肖逵",
  "amy.sandoval","katie.leonard","lottie.hamilton",
  /* eslint-enable */
]
members = members.map((v, i) => {
  return {
    avatar: `https://randomuser.me/api/portraits/men/${i % 5}.jpg`,
    name: v
  }
})

export default {
  components: { At },
  name: 'app',
  data () {
    return {
      members,
      html: `
Awesome Electron 
Useful resources for creating apps with Electron
Inspired by the awesome list thing. You might also like awesome-nodejs.
Example apps
Some good apps written with Electron.
Open Source
Atom - Code editor.
Nuclide - Unified IDE.
Playback - Video player.
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
  color: #2c3e50;
  margin: 60px;
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
textarea {
  font-size: inherit;
  resize: none;
}

/* override styles */
#app .atwho-li {
  padding: 0 4px;
}
#app .atwho-li img {
  height: 100%;
  width: auto;
  -webkit-transform: scale(.8);
}
#app .atwho-li span {
  padding-left: 8px;
}
</style>
