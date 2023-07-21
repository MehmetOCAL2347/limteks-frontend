import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Base Elements
import BaseButton from "../a_ui/BaseButton.vue";
import ProductCard from "../a_ui/ProductCard.vue";
import BaseInput from "../a_ui/Base/BaseInput.vue";
import BaseForm from "../a_ui/Base/BaseForm.vue";
import BaseCard from "../a_ui/Base/BaseCard.vue";
import BaseTextArea from "../a_ui/Base/BaseTextArea.vue";
import ContactInfo from "../a_ui/Communications/ContactInfo.vue";
import ContactUs from "../a_ui/Communications/ContactUs.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

{
  /* <font-awesome-icon icon="fa-solid fa-location-dot" fade /> */
}

import {
  faSquareInstagram,
  faSquareTwitter,
  faSquareYoutube,
  faSquareFacebook,
  faLinkedin,
  faJava,
  faConnectdevelop,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faUserTie,
  faUserSecret,
  faUnlock,
  faLaptopCode,
  faPaperPlane,
  faGraduationCap,
  faGlobe,
  faBars,
  faSquareCheck,
  faCircleDot,
  faStopwatch20,
  faFileCircleExclamation
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faLocationDot,
  faPhone,
  faEnvelope,
  faSquareInstagram,
  faSquareTwitter,
  faSquareYoutube,
  faUserTie,
  faLinkedin,
  faSquareFacebook,
  faJava,
  faConnectdevelop,
  faUserSecret,
  faUnlock,
  faLaptopCode,
  faPaperPlane,
  faGraduationCap,
  faGlobe,
  faBars,
  faSquareCheck,
  faCircleDot,
  faStopwatch20,
  faFileCircleExclamation
);

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("product-card", ProductCard);
app.component("contact-info", ContactInfo);
app.component("contact-us", ContactUs);
app.component("base-input", BaseInput);
app.component("base-form", BaseForm);
app.component("base-card", BaseCard);
app.component("base-text-area", BaseTextArea);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
