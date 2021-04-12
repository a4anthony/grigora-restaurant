<template>
  <div class="item-cards" :id="`itemSection__${item.id}`">
    <section-header :title="item.name" :caption="item.name" />
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
import SectionHeader from "@/components/SectionHeader";
import ItemCard from "@/components/ItemCard";
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
    },
    classList() {
      if (this.item.items_count === 1) {
        return "w-50 w-sm-100";
      }
      return "flex-grow flex-grow-sm-0";
    }
  },
  watch: {
    // activeSubMenu: {
    //   handler(val) {
    //   document
    //     .getElementById(`itemSection__${val.id}`)
    //     .scrollIntoView({ behavior: "smooth" });
    // const scrollTo = document.getElementById(`itemSection__${val.id}`)
    //   .offsetTop;
    // console.log(val);
    // console.log(scrollTo);
    // window.scrollTo({
    //   top: scrollTo,
    //   left: 0,
    //   behavior: "smooth"
    // });
    // var ref = `itemSection__${val.id}`;
    // const el = document.body;
    // var container1 = document.getElementById(`itemSection__${val.id}`)
    //   .scrollHeight;
    // window.scrollTo({ top: container1, behavior: "smooth" });
    // var container2 = document.querySelector("#about_section").scrollHeight;
    // var container3 = document.querySelector("#contact_section").scrollHeight;
    // if (ref == "home") {
    //   const s_top = 0;
    //   window.scrollTo({ top: s_top, behavior: "smooth" });
    // } else if (ref == "about") {
    //   const s_top = container1 + 80;
    //   window.scrollTo({ top: s_top, behavior: "smooth" });
    // } else if (ref == "contact") {
    //   const s_top = container1 + container2 + 160;
    //   window.scrollTo({ top: s_top, behavior: "smooth" });
    // }
    // if (this.isOpen) {
    //   this.isOpen = !this.isOpen;
    // }
    // this.$refs.collapse.classList.remove("show");
    // el.classList.remove("no-scroll");
    //   },
    //   deep: true
    // }
  },
  props: {
    title: {
      type: String
      // required: true
    },
    caption: {
      type: String
      // required: true
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
  /*background-color: red;*/
  width: 50%;
  height: 140px;
  flex: 0 0 auto;
  padding-right: 5px;
}
.item-right {
  /*background-color: red;*/
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
  .w-sm-100 {
    width: 100% !important;
  }
  .flex-wrap-sm {
    flex-wrap: wrap;
  }
  .flex-grow-sm-0 {
    flex-grow: unset !important;
    width: 100% !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 1rem;
  }
  .flex-grow-sm-0:last-child {
    margin-bottom: 0 !important;
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
  .w-sm-100 {
    width: 100% !important;
  }
  .flex-wrap-sm {
    flex-wrap: wrap;
  }
  .flex-grow-sm-0 {
    flex-grow: unset !important;
    width: 100% !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 1rem;
  }
  .flex-grow-sm-0:last-child {
    margin-bottom: 0 !important;
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
