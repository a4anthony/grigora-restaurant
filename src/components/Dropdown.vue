<template>
  <div class="dropdown" :id="id" :class="classes">
    <div class="d-flex dropdown-buttons items-center" @click="show = !show">
      <button class=" w-100 dropdown-btn items-center">
        <span v-if="label" class="">
          {{ label }}
        </span>
        <span v-else class="" style="display: inline-block; padding: 10px 30px">
          {{ activeMenu.category_name }}
        </span>
      </button>
      <span class="toggle-icon d-flex items-center">
        <fa :icon="['fas', 'chevron-down']" />
      </span>
    </div>

    <div v-if="show" class="dropdown-content">
      <button
        v-for="(option, index) in options"
        class="d-block w-100 text-left"
        @click="setActiveMenu(option)"
        :key="`dropdownOption${index}`"
      >
        <span class="d-block">
          <slot name="option" :item="option"> </slot>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";
export default {
  name: "Dropdown",
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    }
  },
  computed: {
    id() {
      return `dropdown__${uniqueId()}`;
    },
    activeMenu() {
      return this.$store.state.activeMenu;
    }
  },
  data() {
    return {
      show: true,
      selectedOption: ""
    };
  },
  mounted() {
    this.selectedOption = this.options[0];
    if (!this.label) {
      this.$store.commit("setActiveMenu", this.options[0]);
    }
  },
  methods: {
    setActiveMenu(option) {
      if (!this.label) {
        this.$store.commit("setActiveMenu", option);
      } else {
        this.selectedOption = option;
      }
      this.show = false;
    },
    clear(e) {
      const el = document.getElementById(this.id);
      const { target } = e;
      if (el !== target && !el.contains(target)) {
        this.show = false;
      }
    }
  },
  created() {
    document.addEventListener("touchstart", this.clear);
    document.addEventListener("click", this.clear);
  },
  unmounted() {
    document.removeEventListener("touchstart", this.clear);
    document.removeEventListener("click", this.clear);
  }
};
</script>

<style scoped>
.instruction {
  text-align: center;
  color: #e39419;
  font-weight: 600;
  font-size: 0.9rem;
}
.dropdown {
  position: relative;
}
.dropdown:hover {
  cursor: pointer;
}
.dropdown-content {
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
  border-radius: 5px;
  /*border: 1px solid red;*/
  position: absolute;
  background-color: #fff;
  color: red;
  top: 45px;
  left: 0;
  right: 0;
  z-index: 10;
  /*padding: 20px;*/
}
.dropdown-content button {
  min-height: 48px;
  padding: 8px 16px;
  transition: color 0.3s, background-color 0.3s;
}
.dropdown-content button:first-child {
  border-radius: 5px 5px 0 0;
}
.dropdown-content button:last-child {
  border-radius: 0 0 5px 5px;
}
.dropdown-content button:hover {
  background-color: #dbdada;
}
.dropdown-buttons {
  color: #ffffff;
  height: 38px;
  border-radius: 28px;
  border: 2px solid red;
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

.dropdown.stores .dropdown-btn {
  color: #e39419;
  background-color: transparent;
  padding: 0 4rem;
  text-align: center;
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
  .dropdown.stores {
    min-width: 30%;
    margin: 0 auto;
  }
  .dropdown.stores .dropdown-btn {
    padding: 0 10px;
  }
  .dropdown-content {
    left: unset;
    right: 0;
    width: 265px;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .dropdown.stores {
    min-width: 70%;
    margin: 0 auto;
  }
  .dropdown.stores .dropdown-btn {
    padding: 0 10px;
  }
  .dropdown-content {
    left: unset;
    right: 0;
    width: 265px;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
