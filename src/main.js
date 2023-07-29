import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
import "bootstrap/dist/css/bootstrap.css";

app.use(router);

app.mount("#app");
