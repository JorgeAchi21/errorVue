require('./bootstrap');

//Import libraries
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

//Import componentsw
import App from './components/App.vue';

//Import routes
import { routes } from "./routes";

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

const app = new Vue({
    el: '#app',
    router: router,
    render(h) { return h(App) }
})