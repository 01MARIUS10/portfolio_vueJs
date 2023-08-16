import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
import "vue3-carousel/dist/carousel.css";

import "bootstrap/dist/css/bootstrap.css";

app.use(router);
// app.use(Carousel3d);
app.mount("#app");
