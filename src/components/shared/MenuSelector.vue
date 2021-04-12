<template>
  <div
    class="d-inline-flex flex-wrap justify-between flex-column centered-sm centered-md"
  >
    <span class=" text-yellow text-center menu-select-text">Chose a Menu</span>
    <dropdown
      :options="data.all_data"
      classes="stores"
      adjust
      btn-classes="stores"
      dropdown-classes="stores-dropdown"
    >
      <template v-slot:option="{ item }">
        <span style="font-weight: 700">{{ item.category_name }} </span>
        <span> [{{ item.start_time }} - {{ item.end_time }}]</span>
      </template>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import { appData } from "@/data";
export default {
  name: "MenuSelector",
  components: { Dropdown },
  computed: {
    data() {
      return appData();
    }
  }
};
</script>

<style scoped>
.menu-select-text {
  font-weight: 400;
  font-size: 0.85rem;
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
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
