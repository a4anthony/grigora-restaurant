<template>
  <div>
    <navigation-bar />
    <lander />
    <page-nav />
    <body-container>
      <template v-slot:main>
        <div class="main-container">
          <promotions />
          <featured-items />
          <item-cards v-for="tab in activeMenu.data" :key="tab" :item="tab" />
        </div>
      </template>
      <template v-slot:side>
        <cart :only-header="false" />
      </template>
    </body-container>
    <footer-bar />
    <more-info-modal />
    <location-search-modal />
  </div>
</template>

<script>
import NavigationBar from "@/components/layout/NavigationBar";
import Lander from "@/components/Lander";
import { appData } from "@/data";
import Promotions from "@/components/Promotions";
import Cart from "@/components/shared/Cart";
import FeaturedItems from "@/components/FeaturedItems";
import ItemCards from "@/components/ItemCards";
import FooterBar from "@/components/layout/FooterBar";
import PageNav from "@/components/PageNav";
import BodyContainer from "@/components/BodyContainer";
import MoreInfoModal from "@/components/shared/MoreInfoModal";
import LocationSearchModal from "@/components/shared/LocationSearchModal";
export default {
  name: "App",
  components: {
    LocationSearchModal,
    MoreInfoModal,
    BodyContainer,
    PageNav,
    FooterBar,
    ItemCards,
    FeaturedItems,
    Cart,
    Promotions,
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
.side-content {
  /*background-color: #fbfbfc;*/
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

  .main-container {
    padding: 5px 50px 50px 50px;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
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
