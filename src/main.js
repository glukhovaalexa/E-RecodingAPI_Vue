import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from 'vue'

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';

import './plugins/bootstrap-vue.js'
import 'boxicons';

require('dotenv').config()

import App from './App.vue'

import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('v-calendar', Calendar);
Vue.component('v-date-picker', DatePicker);

const router = new VueRouter({
    routes
});

Vue.component('sidnav-component', require('./components/partials/SideNavComponent.vue').default);
Vue.component('topnav-component', require('./components/partials/TopNavComponent.vue').default);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
