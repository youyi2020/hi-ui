import Vue from 'vue'
import Play from './play/index'
import Hi from 'main/index.js';

Vue.config.productionTip = false;
Vue.use(Hi);

new Vue({
    el:"#app",
    template:'<Play/>',
    components:{Play}
});