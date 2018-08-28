import Vue from 'vue'
import Router from 'vue-router'
import HomepageView from "./views/homepage";
import FooView from "./views/foo";
import BarView from "./views/bar";

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        linkExactActiveClass: 'is-active',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            {path: '/foo', component: FooView},
            {path: '/bar', component: BarView},
            {path: '/elsewhere', component: BarView},
            {path: '/', name: 'home', component: HomepageView},
            {path: '*', redirect: '/'},
        ],
    });
}