import 'element-ui/lib/theme-chalk/index.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'

Vue.use(Vuetify)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
