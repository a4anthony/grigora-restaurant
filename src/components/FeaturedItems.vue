<template>
  <div class="featured-items" id="featuredItems">
    <!--section header-->
    <section-header
      :title="`<span class='text-yellow'>Featured </span><span>Items</span>`"
      caption="Vendors featured items"
    />
    <div class="featured-items-container">
      <!--prev button-->
      <button
        @click="scrollStart"
        class="nav-btn prev-btn"
        :class="prevBtnHide ? 'hidden' : 'visible'"
      >
        <fa :icon="['fas', 'arrow-left']" />
      </button>
      <!--items -->
      <div class="carousel" id="carousel">
        <item-card scrollable v-for="item in data" :key="item" :item="item" />
      </div>
      <!--next button-->
      <button
        @click="scrollEnd"
        class="nav-btn next-btn"
        :class="nextBtnHide ? 'hidden' : 'visible'"
      >
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
  data() {
    return {
      nextBtnHide: false,
      prevBtnHide: true
    };
  },
  methods: {
    scrollStart() {
      const element = document.getElementById("carousel");
      element.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      this.nextBtnHide = !this.nextBtnHide;
      this.prevBtnHide = !this.prevBtnHide;
    },
    scrollEnd() {
      const element = document.getElementById("carousel");
      const currentPosition = element.scrollLeft;

      element.scrollTo({
        top: 0,
        left: element.clientWidth + 30,
        behavior: "smooth"
      });

      const that = this;
      setTimeout(function() {
        if (currentPosition !== element.scrollLeft) {
          that.nextBtnHide = !that.nextBtnHide;
          that.prevBtnHide = !that.prevBtnHide;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.carousel::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.carousel {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.featured-items-container {
  position: relative;
}
.carousel {
  height: 140px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.featured-items {
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
}
.prev-btn {
  left: -1rem;
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
  .nav-btn {
    width: 35px;
    height: 35px;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
