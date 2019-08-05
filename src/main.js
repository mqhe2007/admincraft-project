import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Admincraft from 'admincraft'
import appModule from './module-demo/main'
Vue.use(Admincraft, { router, store })

Vue.config.productionTip = false
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

app.$moduleLoader(appModule)
