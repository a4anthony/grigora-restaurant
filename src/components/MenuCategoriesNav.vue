<template>
  <div class="d-flex justify-between menu-categories-nav container">
    <div class="flex-grow menu-categories mr-2 d-flex items-center">
      <button v-for="(menu, index) in activeMenu.data" :key="index">
        <span style="color: red">{{ menu.name }}</span>

        <span class="l-dot"></span>
        <span class="r-dot"></span>
        <span class="bar"></span>
      </button>
    </div>
  </div>
</template>

<script>
import { appData } from "@/data";

export default {
  name: "MenuCategoriesNav",
  computed: {
    data() {
      return appData();
    },
    activeMenu() {
      return this.$store.state.activeMenu;
    }
  },
  mounted() {
    console.log(this.$store);
  }
};
</script>

<style scoped>
.menu-categories {
}
.menu-categories button {
  height: 65px;
  padding: 0 2rem;
  position: relative;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ca3114;
}
.l-dot {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ca3114;
  bottom: 0;
  left: 2rem;
}
.r-dot {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ca3114;
  bottom: 0;
  left: calc(2rem + 30px);
}
.bar {
  position: absolute;
  background-color: #ca3114;
  height: 5px;
  bottom: 0;
  left: calc(2rem + 2px);
  width: 30px;
}
.menu-categories button:hover {
  background-color: #f5e9e7;
}
.cart-info {
  width: 20%;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
  padding-left: 1rem;
  border-left: 1px solid red;
}
.menu-categories-nav {
  background-color: #fbfbfc;
}
.container {
  padding-left: calc(85px - 2rem);
  /*padding: 5px 85px 40px 85px;*/

  /*padding: 0 5rem;*/
}
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
  .menu-categories-nav {
    width: 100vw;
  }
  .menu-categories {
    margin-right: 0 !important;
  }
  .container {
    padding: 0 0.5rem;
  }
  .menu-categories button {
    padding: 0 1rem;
    font-size: 0.9rem;
  }
  .l-dot {
    left: 1rem;
  }
  .r-dot {
    left: calc(1rem + 30px);
  }
  .bar {
    left: calc(1rem + 2px);
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
