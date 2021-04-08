<template>
  <div class="item-cards">
    <section-header :title="item.name" :caption="item.name" />
    <!--<h1>{{ classList }}</h1>-->

    <div class="d-flex flex-wrap-sm">
      <div :class="classList">
        <item-card :key="item" :item="data.items[item.id][0]" />
      </div>
      <div
        v-if="item.items_count === 2"
        :class="[classList, item.items_count === 2 && 'ml-1']"
      >
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
  components: { ItemCard, SectionHeader },
  computed: {
    data() {
      return appData();
    },
    classList() {
      if (this.item.items_count === 1) {
        return "w-50 w-sm-100";
      }
      return "flex-grow flex-grow-sm-0";
    }
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
  }
};
</script>

<style scoped>
.item-cards {
  margin-top: 2.5rem;
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
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
