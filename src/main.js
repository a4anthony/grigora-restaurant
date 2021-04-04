import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/styles.css";
import "@/assets/fonts/nunito/stylesheet.css";
import "@/plugins/font-awesome-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import InlineSvg from "vue-inline-svgs";

createApp(App)
  .component("fa", FontAwesomeIcon)
  .component("InlineSvg", InlineSvg)
  .mount("#app");
