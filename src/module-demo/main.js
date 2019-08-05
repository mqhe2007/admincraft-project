import Logo from './components/Logo.vue'
import routes from './routes'
import storeModule from './store-module'
export default function({ Vue }) {
  Vue.prototype.$addRoute(routes)
  Vue.prototype.$addStore('main', storeModule)
  Vue.prototype.$eventBus.on('visitedAbout',() => {
    console.log('用户访问了about页面。')
  })
  Vue.prototype.$dynamicComponent.add(Logo)
}
