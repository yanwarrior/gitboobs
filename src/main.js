
import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import router from './router'
import { store } from '@/store/store'

Vue.use(Vant)
// console.log(Vue.version)
Vue.config.productionTip = false


new Vue({
  // store: store,
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
