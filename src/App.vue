<template>
  <div id="app">
    <at :members="members" name-key="name" v-model="html">
      <!-- custom: same as default slot -->
      <!-- <template slot="item" scope="s">
        <span v-text="s.item"></span>
      </template> -->

      <!-- custom: with avatars -->
      <template slot="item" scope="s">
        <img class="avatar" :src="s.item.avatar">
        <span v-text="s.item.name"></span>
      </template>

      <div class="editor"
        contenteditable></div>
    </at>

    <at :members="members" name-key="name" v-model="html2">
      <!-- custom: same as default slot -->
      <!-- <template slot="item" scope="s">
        <span v-text="s.item"></span>
      </template> -->

      <span slot="embeddedItem" slot-scope="s">
        <span class="tag"><img class="avatar" :src="s.current.avatar">{{ s.current.name }}</span>
      </span>

      <!-- custom: with avatars -->
      <template slot="item" scope="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name"></span>
      </template>

      <div class="editor"
        contenteditable></div>
    </at>

    <br />

    <at-ta :members="members" name-key="name" v-model="text">
      <!-- custom: with avatars -->
      <template slot="item" scope="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name"></span>
      </template>

      <textarea class="editor"></textarea>
    </at-ta>
  </div>
</template>

<script>
// import At from 'vue-at'
// import At from '../dist/vue-at'
// import AtTa from '../dist/vue-at-textarea'
import At from './At.vue'
import AtTa from './AtTextarea.vue'

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
  components: { At, AtTa },
  name: 'app',
  data () {
    const data = {
      members,
      text: `
<<< Textarea >>>
Awesome Electron 
Useful resources for creating apps with Electron
Inspired by the awesome list thing. You might also like awesome-nodejs.
Example apps
Some good apps written with Electron.
Open Source
Atom - Code editor.
Nuclide - Unified IDE.
Playback - Video player.
Awesome Electron 
Useful resources for creating apps with Electron
Inspired by the awesome list thing. You might also like awesome-nodejs.
Example apps
Some good apps written with Electron.
Open Source
Atom - Code editor.
Nuclide - Unified IDE.
Playback - Video player.
      `.trim(), // fix trailing abnormal nodes
      html: `
        <div>&lt;&lt;&lt; Content Editable Div &gt;&gt;&gt;</div><div>Awesome Electron&nbsp;
        <img src="static/awesome.svg"></div><div><img style="max-width: 50px;" src="static/electron.svg"></div><div>Useful resources for creating apps with&nbsp;Electron</div><div>Inspired by the&nbsp;awesome&nbsp;list thing. You might also like&nbsp;awesome-nodejs.</div><div>Example apps</div><div>Some good apps written with Electron.</div><div>Open Source</div><div>Atom&nbsp;- Code editor.</div><div>Nuclide&nbsp;- Unified IDE.</div><div>Playback&nbsp;- Video player.</div>
        <div>&lt;&lt;&lt; Content Editable Div &gt;&gt;&gt;</div><div>Awesome Electron&nbsp;<img style="max-width: 50px;" src="static/awesome.svg"></div><div><img style="max-width: 50px;" src="static/electron.svg"></div><div>Useful resources for creating apps with&nbsp;Electron</div><div>Inspired by the&nbsp;awesome&nbsp;list thing. You might also like&nbsp;awesome-nodejs.</div><div>Example apps</div><div>Some good apps written with Electron.</div><div>Open Source</div><div>Atom&nbsp;- Code editor.</div><div>Nuclide&nbsp;- Unified IDE.</div><div>Playback&nbsp;- Video player.</div>
      `.trim() // fix trailing abnormal nodes
    }
    data.html2 = data.html
    return data
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

.tag {
  border-radius: 5px;
  background: beige;
  border: 1ps outset yellow;
}
.editor {
  width: 400px;
  height: 200px;
  overflow: auto;
  white-space: pre-wrap;
  border: solid 2px rgba(0,0,0,.5);
}

.avatar {
  max-width: 1em;
  vertical-align: middle;
}
textarea {
  padding: 0;
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
#app .atwho-wrap {
  display: inline-block;
  vertical-align: top;
  margin-left: 40px;
  margin-top: 30px;
}
</style>
