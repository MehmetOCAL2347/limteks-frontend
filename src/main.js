import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

// Base Elements
import BaseButton from '../a_ui/BaseButton.vue';
import ProductCard from '../a_ui/ProductCard.vue';

const app = createApp(App);

app.use(router);

app.component('base-button', BaseButton);
app.component('product-card', ProductCard);

app.mount('#app');