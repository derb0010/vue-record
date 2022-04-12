import Vue from 'vue'
import App from './App.vue'
import { createApp } from 'vue'

import VueRecord from './components/index'
console.log('main.js VueRecord: ', VueRecord)

Vue.config.productionTip = false

Vue.use(VueRecord)

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const app = createApp(App)
app.mount('#app')