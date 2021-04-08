<template>
  <div>
    <navigation-bar />
    <lander />
    <div class="d-flex">
      <div class="flex-grow main-content" style="width: 72%;">
        <menu-categories-nav />

        <div class="main-container">
          <promotions />
          <featured-items />
          <item-cards v-for="tab in activeMenu.data" :key="tab" :item="tab" />
        </div>
      </div>
      <div style="width: 28%" class="side-content">
        <cart />
      </div>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import NavigationBar from "@/components/layout/NavigationBar";
import Lander from "@/components/Lander";
import { appData } from "@/data";
import MenuCategoriesNav from "@/components/MenuCategoriesNav";
import Promotions from "@/components/promotions";
import Cart from "@/components/Cart";
// import ItemCards from "@/components/ItemCards";
import FeaturedItems from "@/components/FeaturedItems";
import ItemCards from "@/components/ItemCards";
import FooterBar from "@/components/layout/FooterBar";
export default {
  name: "App",
  components: {
    FooterBar,
    ItemCards,
    FeaturedItems,
    // ItemCards,
    Cart,
    Promotions,
    MenuCategoriesNav,
    Lander,
    NavigationBar
  },
  computed: {
    data() {
      return appData();
    },
    activeMenu() {
      return this.$store.state.activeMenu;
    }
  },
  mounted() {
    console.log(appData());
  }
};
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.main-container {
  padding: 5px 85px 40px 85px;
}
@media screen and (min-width: 1366px) and (max-width: 1919px) {
}

@media (min-width: 1198px) and (max-width: 1365.9px) {
}

/* Normal desktop :992px. */

@media (min-width: 992px) and (max-width: 1197px) {
}

/* Normal desktop :991px. */

@media (min-width: 768px) and (max-width: 991px) {
  .side-content {
    display: none;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .main-content {
    width: 100% !important;
  }
  .main-container {
    padding: 5px 1rem 40px 1rem;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
