// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.css'
// Vue.use(iView);
// Vue.use(Vuetify);

//引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
// import * as L from 'leaflet' 
// Vue.L = Vue.prototype.$L = L