import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import Vue from 'vue'
import App from './App.vue'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
