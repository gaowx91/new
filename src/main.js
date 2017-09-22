// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import _config from './common/config.js'
import _function from './common/function.js'
import { Toast } from 'mint-ui';

import axios from 'axios'
import qs from 'qs';

import overScroll from '@/components/scroll'
document.addEventListener('DOMContentLoaded', function() {
    if (window.FastClick) {
        window.FastClick.attach(document.body);
    }
}, false);
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;
Vue.prototype.CONFIG = _config;
Vue.prototype.FUNCTION = _function;
Vue.prototype.Toast = Toast;


Vue.config.productionTip = false;

Vue.use(Mint);

Vue.prototype.overScroll = overScroll;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    },
    render: h => h(App)
})

