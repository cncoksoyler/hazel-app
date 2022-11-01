import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import './assets/tailwind.css'

/* eslint-disable */
createApp(App).use(router).use(store).mount('#app')
