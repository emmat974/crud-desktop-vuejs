import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from './route'
import store from './store'


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
});

createApp(App).use(store).use(router).mount('#app')
