require("./bootstrap");

window.Vue = require("vue");

import vuetify from "./vuetify";
import router from "./routes/index";
import App from "./App.vue";
import Vue from "vue";
import "./global-components";

Vue.use(router);

const app = new Vue({
    vuetify,
    router,
    render: (h) => h(App),
    el: "#app",
});
