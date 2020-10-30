import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
//依赖阿里巴巴图标库
import './assets/css/global.css' 
import './assets/fonts/iconfont.css'
// 依赖element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//依赖axios
import axios from './http'
Vue.prototype.$http=axios
Vue.use(ElementUI,{size:'small'})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
