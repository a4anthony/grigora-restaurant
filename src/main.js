import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/styles.css";
import "@/assets/css/responsive.css";
import "@/assets/fonts/nunito/stylesheet.css";
import "@/plugins/font-awesome-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import InlineSvg from "vue-inline-svgs";
import store from "./store";

createApp(App)
  .mixin({
    methods: {
      bodyScroll(bool) {
        const $body = document.querySelector("body");
        let scrollPosition = window.pageYOffset;
        if (!bool) {
          scrollPosition = window.pageYOffset;
          $body.style.overflow = "hidden";
          $body.style.position = "fixed";
          $body.style.top = `-${scrollPosition}px`;
          $body.style.width = "100%";
        } else {
          const scrollY = $body.style.top;
          $body.style.removeProperty("overflow");
          $body.style.removeProperty("position");
          $body.style.removeProperty("top");
          $body.style.removeProperty("width");
          window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
      }
    }
  })
  .component("fa", FontAwesomeIcon)
  .component("InlineSvg", InlineSvg)
  .use(store)
  .mount("#app");
