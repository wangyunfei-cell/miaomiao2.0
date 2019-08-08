import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.axios = axios
axios.defaults.baseURL = '/api' //关键代码

Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg);
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})