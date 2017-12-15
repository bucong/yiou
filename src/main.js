// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/reset.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/font-awesome/css/font-awesome.min.css'
import App from './App'
import router from './router'
import './assets/js/fontSize'
import './assets/css/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
