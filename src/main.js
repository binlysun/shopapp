import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store'
//引入fastclick去除点击后300ms延迟
import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

//css
import './style/commen.less'
import './config/rem'

//引入vant
import './plugins/vant.js'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')