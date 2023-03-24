import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

// Base Elements
import BaseButton from '../a_ui/BaseButton.vue';
import ProductCard from '../a_ui/ProductCard.vue';
import ContactInfo from "../a_ui/Communications/ContactInfo.vue";
import ContactUs from "../a_ui/Communications/ContactUs.vue";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

{/* <font-awesome-icon icon="fa-solid fa-location-dot" fade /> */}

import {
    faSquareInstagram,
    faSquareTwitter,
    faSquareYoutube
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faLocationDot,
    faPhone,
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons';


library.add(
    faLocationDot,
    faPhone,
    faEnvelope,
    faSquareInstagram,
    faSquareTwitter,
    faSquareYoutube
)

const app = createApp(App);

app.use(router);

app.component('base-button', BaseButton);
app.component('product-card', ProductCard);
app.component('contact-info', ContactInfo);
app.component('contact-us', ContactUs);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');