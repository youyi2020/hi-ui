import Vue from 'vue'
import App from './app'
import Hi from 'main/index.js';
import VueRouter from 'vue-router';
import 'packages/theme-chalk/src/index.scss';
import routes from './route.config';

import demoBlock from './components/demo-block';
import MainFooter from './components/footer';
import MainHeader from './components/header';
import SideNav from './components/side-nav';
import FooterNav from './components/footer-nav';

Vue.config.productionTip = false;
Vue.use(Hi);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
Vue.component('footer-nav', FooterNav);

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
});

new Vue({
    el:"#app",
    router,
    template:'<App/>',
    components:{App}
});