<template>
  <div class="featured-items" id="featuredItems">
    <section-header
      :title="`<span class='text-yellow'>Featured </span><span>Items</span>`"
      caption="Vendors featured items"
    />

    <div style="position: relative">
      <button @click="scrollStart" class="nav-btn prev-btn">
        <fa :icon="['fas', 'arrow-left']" />
      </button>
      <div class="carousel" id="carousel">
        <item-card scrollable v-for="item in data" :key="item" :item="item" />
      </div>
      <button @click="scrollEnd" class="nav-btn next-btn">
        <fa :icon="['fas', 'arrow-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import SectionHeader from "@/components/shared/SectionHeader";
import { appData } from "@/data";
import ItemCard from "@/components/shared/ItemCard";
export default {
  name: "FeaturedItems",
  components: { ItemCard, SectionHeader },
  computed: {
    data() {
      return appData().featured_items;
    }
  },
  methods: {
    scrollStart() {
      const element = document.getElementById("carousel");
      element.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    scrollEnd() {
      const element = document.getElementById("carousel");
      element.scrollTo({
        top: 0,
        left: element.clientWidth + 30,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.carousel {
  /*background-color: #fff;*/
  height: 140px;
  /*display: flex;*/
  /*overflow-x: auto;*/
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.item {
  width: 360px;
  background-color: blue;
  margin-right: 1rem;
  flex: 0 0 auto;
  /*flex-shrink: 0;*/
}
.item:last-child {
  margin-right: 0 !important;
}
.featured-items {
  /*padding: 2.5rem 4rem 0 5rem;*/
  margin-top: 2.5rem;
  position: relative;
}
.nav-btn {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e39419;
  top: 50%;
  color: #e39419;
  background-color: #fff;
  transform: translateY(-50%);
  z-index: 10;
}
.next-btn {
  right: -1rem;
  /*top: 0;*/
}
.prev-btn {
  left: -1rem;
  /*top: 0;*/
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
  .featured-items {
    /*padding: 2rem 1rem 0 1rem;*/
  }
  .item {
    width: 100%;
    flex-shrink: 0;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
