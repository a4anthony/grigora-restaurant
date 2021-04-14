<template>
  <div style="position:relative;">
    <button
      v-for="screen in ['large', 'small']"
      :id="`dropdownButton${id}`"
      :key="`${screen}ScreensButton`"
      @click="toggleDropdown(screen)"
      class="nav-location-search-btn d-flex w-100 justify-center items-center large-screens"
      :class="`${screen}-screens`"
    >
      <span class="mr-1">
        <inline-svg
          :size="20"
          :path="require(`!html-loader!../../assets/svgs/placeholder.svg`)"
        />
      </span>
      Wuse 2, Abuja
      <span class="ml-1 toggle-icon">
        <fa :icon="['fas', 'chevron-down']" />
      </span>
    </button>
    <click-animation background-color="#999" ref="showClickAnimation" />
    <dropdown
      label="Location Search"
      dropdown-classes="location-search-dropdown"
      adjust
      set-fixed
      ref="dropdownContent"
      content-only
      :ext-button-id="id"
      use-slot
      :fixed-width="fixedWidth"
    >
      <template v-slot:content>
        <location-search />
      </template>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/shared/Dropdown";
import uniqueId from "lodash.uniqueid";
import ClickAnimation from "@/components/shared/ClickAnimation";
import LocationSearch from "@/components/shared/LocationSearch";
export default {
  name: "LocationSelector",
  components: { LocationSearch, ClickAnimation, Dropdown },
  computed: {
    id() {
      return `location_dropdown__button__${uniqueId()}`;
    }
  },
  mounted() {},
  data() {
    return {
      fixedWidth: 0
    };
  },
  methods: {
    toggleDropdown(screen) {
      this.fixedWidth = document.getElementById(
        "navLocationSelector"
      ).offsetWidth;
      this.$refs.dropdownContent.toggleDropdown();
      this.$refs.showClickAnimation.toggleAnimation();
      if (screen === "small") {
        this.$store.commit("setShowLocationSearchModal");
      }
    }
  }
};
</script>

<style scoped>
.nav-location-search-btn {
  font-size: 1rem;
  font-weight: 700;
  height: 40px;
  color: #212121;
  background-color: transparent;
}
.nav-location-search-btn .flex-items-center {
  position: relative;
  top: 3px;
}
.nav-location-search-btn .flex-items-center svg {
  display: none;
}
.nav-location-search-btn:hover {
  background-color: #e8e8e8;
}
.nav-location-search-btn .toggle-icon {
  color: #999;
  font-weight: 500;
}
.small-screens {
  display: none;
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
  .large-screens {
    display: none;
  }
  .small-screens {
    display: flex;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .nav-location-search-btn {
    font-size: 0.9rem;
  }
  .large-screens {
    display: none;
  }
  .small-screens {
    display: flex;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
