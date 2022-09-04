<template>
  <div id="app">

    <!--
      vue3 migration.2
      fix: [Vue warn]: (deprecation COMPONENT_V_MODEL) v-model usage on component has changed in Vue 3. Component that expects to work with v-model should now use the "modelValue" prop and emit the "update:modelValue" event. You can update the usage and then opt-in to Vue 3 behavior on a per-component basis with `compatConfig: { COMPONENT_V_MODEL: false }`.
      Details: https://v3-migration.vuejs.org/breaking-changes/v-model.html
    -->
    <at :members="members" name-key="name" v-model:value="html">
      <!-- custom: same as default slot -->
      <!-- <template v-slot:item="s">
        <span v-text="s.item"></span>
      </template> -->

      <!-- custom: with avatars -->
      <template #item="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name" />
      </template>

      <!--
        // vue3 migration.4
        fix: [Vue warn]: (deprecation ATTR_ENUMERATED_COERCION) Enumerated attribute "contenteditable" with v-bind value `` will render the value as-is instead of coercing the value to "true" in Vue 3. Always use explicit "true" or "false" values for enumerated attributes. If the usage is intended, you can disable the compat behavior and suppress this warning with:
          configureCompat({ ATTR_ENUMERATED_COERCION: false })
        Details: https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html
      -->
      <div class="editor" :contenteditable="true" />
    </at>

    <at :members="members" name-key="name" v-model:value="html2">
      <template #embeddedItem="s">
        <span><span class="tag"><img class="avatar" :src="s.current.avatar">{{ s.current.name }}</span></span>
      </template>

      <!-- custom: with avatars -->
      <template #item="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name" />
      </template>

      <div class="editor" :contenteditable="true" />
    </at>

    <br>

    <at-ta :members="members" name-key="name" v-model:value="text">
      <!-- custom: with avatars -->
      <template #item="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name" />
      </template>

      <textarea class="editor" />
    </at-ta>

    <!-- <at-ta :members="members" name-key="name">
      <!- custom: with avatars ->
      <template v-slot:item="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name"></span>
      </template>

      <v-textarea class="vuetify-editor" v-model:value="text2"></v-textarea>
    </at-ta>

    <br> -->

    <at-ta :members="members" name-key="name">
      <!-- custom: with avatars -->
      <template #item="s">
        <img :src="s.item.avatar">
        <span v-text="s.item.name" />
      </template>

      <el-input type="textarea" v-model="text3" class="element-editor" />
    </at-ta>
  </div>
</template>

<script>
import At from 'vue-at'
import AtTa from 'vue-at/dist/vue-at-textarea'

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
  name: 'App',
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
        <img src="demo/awesome.svg"></div><div><img style="max-width: 50px;" src="demo/electron.svg"></div><div>Useful resources for creating apps with&nbsp;Electron</div><div>Inspired by the&nbsp;awesome&nbsp;list thing. You might also like&nbsp;awesome-nodejs.</div><div>Example apps</div><div>Some good apps written with Electron.</div><div>Open Source</div><div>Atom&nbsp;- Code editor.</div><div>Nuclide&nbsp;- Unified IDE.</div><div>Playback&nbsp;- Video player.</div>
        <div>&lt;&lt;&lt; Content Editable Div &gt;&gt;&gt;</div><div>Awesome Electron&nbsp;<img style="max-width: 50px;" src="demo/awesome.svg"></div><div><img style="max-width: 50px;" src="demo/electron.svg"></div><div>Useful resources for creating apps with&nbsp;Electron</div><div>Inspired by the&nbsp;awesome&nbsp;list thing. You might also like&nbsp;awesome-nodejs.</div><div>Example apps</div><div>Some good apps written with Electron.</div><div>Open Source</div><div>Atom&nbsp;- Code editor.</div><div>Nuclide&nbsp;- Unified IDE.</div><div>Playback&nbsp;- Video player.</div>
      `.trim() // fix trailing abnormal nodes
    }
    data.text2 = data.text
    data.text3 = data.text
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
textarea {
  display: block;
}

.vuetify-editor {
  width: 400px;
  margin: 0;
  padding: 0;
}
.vuetify-editor textarea {
  height: 200px;
}
.v-input__slot {
  margin: 0;
}
.v-text-field__details {
  display: none;
}

.element-editor {
  width: 400px;
}
.element-editor textarea {
  height: 200px;
}

.editor img {
  max-width: 10em;
  vertical-align: bottom;
}
.tag .avatar {
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
