import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line
import '@/assets/styles/tailwind.css';

createApp(App).use(store).use(router).mount('#app');
