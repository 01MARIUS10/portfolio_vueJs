import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
import "vue3-carousel/dist/carousel.css";
import "bootstrap/dist/css/bootstrap.css";

app.use(router);
app.use(createPinia());
// app.use(Carousel3d);
app.mount("#app");
console.log(window.innerHeight, window.innerWidth);
