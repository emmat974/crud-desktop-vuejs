import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from './route'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
});

createApp(App).use(router).mount('#app')
