import { createApp } from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



library.add(fas, fab, far);
dom.watch();

createApp(App).use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
