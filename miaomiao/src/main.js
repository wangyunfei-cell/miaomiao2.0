import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'
import store from './stores'

Vue.use(Vuex)

Vue.prototype.axios = axios
axios.defaults.baseURL = '/api' //关键代码

Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg);
});
// 滑动效果
import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller);

// loading效果
import Loading from '@/components/Loading'
Vue.component('Loading', Loading);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})