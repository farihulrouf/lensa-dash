import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import Vue Router
import store from './store'; // Import Vuex store
import './assets/app.css';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
app.use(router); // Use Vue Router
app.use(store); // Use Vuex store
app.mount('#app');
