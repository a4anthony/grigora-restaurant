<template>
  <div class="item-cards" :id="`itemSection__${item.id}`">
    <!--section header-->
    <section-header :title="item.name" :caption="item.name" />
    <!--items-->
    <div class="d-flex flex-wrap-sm">
      <div class="item-left">
        <item-card :key="item" :item="data.items[item.id][0]" />
      </div>
      <div class="item-right" v-if="item.items_count === 2">
        <item-card :key="item" :item="data.items[item.id][1]" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "@/components/shared/SectionHeader";
import ItemCard from "@/components/shared/ItemCard";
import { appData } from "@/data";
export default {
  name: "ItemCards",
  components: {
    ItemCard,
    SectionHeader
  },
  computed: {
    data() {
      return appData();
    },
    activeMenu() {
      return this.$store.state.activeMenu;
    },
    activeSubMenu() {
      return this.$store.state.activeSubMenu;
    }
  },
  watch: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onScroll() {
      const items = document.querySelectorAll(".item-cards");
      items.forEach(item => {
        if (window.scrollY > item.offsetTop - 170) {
          const key = item.id.split("itemSection__");
          this.activeMenu.data.forEach(menu => {
            if (
              menu.id === Number(key[1]) &&
              this.activeSubMenu.id !== Number(key[1])
            ) {
              this.$store.commit("setActiveSubMenu", menu);
            }
          });
        }
      });
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
.item-cards {
  margin-top: 2.5rem;
}
.item-left {
  width: 50%;
  height: 140px;
  flex: 0 0 auto;
  padding-right: 5px;
}
.item-right {
  width: 50%;
  height: 140px;
  flex: 0 0 auto;
  padding-left: 5px;
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
  .flex-wrap-sm {
    flex-wrap: wrap;
  }

  .item-left {
    width: 100%;
    padding-right: 0;
    margin-bottom: 1rem;
  }
  .item-right {
    width: 100%;
    padding-left: 0;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .flex-wrap-sm {
    flex-wrap: wrap;
  }
  .item-left {
    width: 100%;
    padding-right: 0;
    margin-bottom: 1rem;
  }
  .item-right {
    width: 100%;
    padding-left: 0;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
