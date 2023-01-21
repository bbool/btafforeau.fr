import { createApp } from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(VueRouter)
createApp(App).use(router).mount('#app')
