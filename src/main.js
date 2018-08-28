import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router'

const router = createRouter();

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    components: {app}
});
