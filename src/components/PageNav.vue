<template>
  <div class="page-nav" ref="pageNav" :class="slideDown && 'slide-down'">
    <body-container>
      <template v-slot:main>
        <menu-categories-nav />
      </template>
      <template v-slot:side>
        <cart only-header />
      </template>
    </body-container>
  </div>
</template>

<script>
import BodyContainer from "@/components/BodyContainer";
import MenuCategoriesNav from "@/components/shared/MenuCategoriesNav";
import Cart from "@/components/shared/Cart";
export default {
  name: "PageNav",
  components: { Cart, MenuCategoriesNav, BodyContainer },
  data() {
    return {
      slideDown: false
    };
  },
  methods: {
    onScroll() {
      const landerHeight = document.getElementById("lander").clientHeight;
      if (window.scrollY > landerHeight + 20) {
        this.slideDown = true;
      } else {
        this.slideDown = false;
      }
    }
  },
  created() {
    document.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    document.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped>
.page-nav {
  /*position: sticky;*/
  /*top: 0;*/
  /*z-index: 10;*/

  position: sticky;
}

.slide-down {
  -webkit-animation: slide-down 0.5s forwards;
  animation: slide-down 0.5s forwards;
}

@keyframes slide-down {
  0% {
    z-index: 10;
    top: -20px;
  }
  100% {
    top: 65px;
    z-index: 50;
    -webkit-box-shadow: inset 0px 7px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 7px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 7px 5px 0px rgba(0, 0, 0, 0.75);
  }
}
/*@-webkit-keyframes slide-down {*/
/*  0% {*/
/*    z-index: 100000000;*/
/*    top: 0;*/
/*  }*/
/*  100% {*/
/*    top: 100px;*/
/*    z-index: 100000000;*/
/*  }*/
/*}*/
/* (1366x768) WXGA Display */

@media screen and (min-width: 1366px) and (max-width: 1919px) {
}

@media (min-width: 1198px) and (max-width: 1365.9px) {
}

/* Normal desktop :992px. */

@media (min-width: 992px) and (max-width: 1197px) {
}

/* Normal desktop :991px. */

@media (min-width: 768px) and (max-width: 991px) {
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
