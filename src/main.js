// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import Vue Router
import './assets/app.css'
import '@fortawesome/fontawesome-free/css/all.css'
createApp(App)
    .use(router) // Use Vue Router
    .mount('#app');
