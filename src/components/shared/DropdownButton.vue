<template>
  <div
    :class="classes"
    class="d-flex dropdown-buttons items-center"
    :ref="`dropdownButton${id}`"
    :id="`dropdownButton${id}`"
    @click="toggle"
  >
    <!--button-->
    <button class=" w-100 dropdown-btn items-center">
      <span v-if="label">
        {{ label }}
      </span>
      <span v-else class="d-inline-block" style=" padding: 10px 30px">
        {{ activeMenu.category_name }}
      </span>
    </button>
    <!--toggle icon-->
    <span class="toggle-icon d-flex items-center">
      <fa
        :icon="['fas', 'chevron-down']"
        :class="rotate ? 'rotate-toggle-icon' : ''"
      />
    </span>
    <click-animation background-color="#999" ref="showClickAnimation" />
  </div>
</template>

<script>
import ClickAnimation from "@/components/shared/ClickAnimation";
export default {
  name: "DropdownButton",
  components: { ClickAnimation },
  props: {
    label: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    activeMenu() {
      return this.$store.state.activeMenu;
    }
  },
  data() {
    return {
      rotate: false
    };
  },
  methods: {
    toggle() {
      this.toggleIcon();
      this.$emit("toggle-dropdown");
      this.$refs.showClickAnimation.toggleAnimation();
    },
    toggleIcon() {
      this.rotate = !this.rotate;
    }
  }
};
</script>

<style scoped>
.dropdown-buttons {
  color: #ffffff;
  height: 38px;
  border-radius: 28px;
  border: 2px solid red;
  position: relative;
}
.dropdown-btn {
  border-radius: 28px 0 0 28px;
}
.toggle-icon {
  padding: 0 1.2rem 0 1rem;
  background-color: transparent;
  border-radius: 0 28px 28px 0;
  border-left: 1px solid #fff;
  height: 22px;
}
.toggle-icon:hover {
  cursor: pointer;
}

.stores .dropdown-btn {
  color: #e39419;
  background-color: transparent;
  padding: 0 4rem;
  font-weight: 700;
  text-align: center;
}

.delivery .dropdown-btn {
  color: #fff;
  background-color: transparent;
  padding: 0 1rem;
  text-align: left;
}
.dropdown-buttons {
  transition: all 0.28s;
}
.delivery.dropdown-buttons {
  height: 38px !important;
  background-color: #fff;
  border-color: #fff !important;
  color: #333 !important;
}
.stores.dropdown-buttons {
  border-color: #e39419 !important;
  color: #e39419 !important;
}
.stores.dropdown-buttons:hover {
  background-color: #4c453b66;
}

.delivery.dropdown-buttons .dropdown-btn {
  color: #333 !important;
}
.delivery.dropdown-buttons .toggle-icon {
  border-left: 1px solid #999 !important;
}
.stores.dropdown-buttons .toggle-icon {
  border-left: 1px solid #5a3e13 !important;
}

.toggle-icon svg {
  transition: transform 0.28s;
}

.rotate-toggle-icon {
  transform: rotate(180deg);
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

.rotate-180 {
  transform: rotate(180deg);
}
.q-btn-dropdown__arrow {
  transition: transform 0.28s;
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
  .stores .dropdown-btn {
    padding: 0 10px;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .stores .dropdown-btn {
    padding: 0 10px;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
