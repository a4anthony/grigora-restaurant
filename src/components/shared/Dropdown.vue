<template>
  <div
    class="dropdown"
    :id="id"
    :class="dropdownClasses"
    :ref="`dropdown${id}`"
  >
    <!--dropdown button-->
    <dropdown-button
      :classes="contentOnly ? `d-none ${btnClasses}` : `${btnClasses}`"
      :id="id"
      :label="label"
      :ref="`dropdownButton${id}`"
      @toggle-dropdown="toggleDropdown"
    />
    <!--dropdown content-->
    <div
      :class="show ? 'visible' : 'hidden'"
      class="dropdown-content"
      :ref="`dropdownContent${id}`"
      :style="styles"
    >
      <div v-if="!useSlot">
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

      <div v-else>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";
import DropdownButton from "@/components/shared/DropdownButton";
export default {
  name: "Dropdown",
  components: { DropdownButton },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    btnClasses: {
      type: String,
      default: ""
    },
    dropdownClasses: {
      type: String,
      default: ""
    },
    adjust: {
      type: Boolean,
      default: false
    },
    setFixed: {
      type: Boolean,
      default: false
    },
    contentOnly: {
      type: Boolean,
      default: false
    },
    extButtonId: {
      type: String,
      default: ""
    },
    fixedWidth: {
      type: Number,
      default: null
    },
    useSlot: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    fixedWidth: {
      handler(val) {
        if (val) {
          this.styles.width = `${val}px`;
        }
      }
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
      show: false,
      selectedOption: "",
      styles: {},
      checking: false
    };
  },
  mounted() {
    if (!this.useSlot) {
      this.selectedOption = this.options[0];
    }
    if (!this.label) {
      this.$store.commit("setActiveMenu", this.options[0]);
    }
  },
  methods: {
    setActiveMenu(option) {
      if (!this.label) {
        this.$store.commit("setActiveMenu", option);
        this.$refs[`dropdownButton${this.id}`].toggleIcon();
      } else {
        this.selectedOption = option;
        this.$emit("on-close");
      }
      this.show = false;
    },
    clear(e) {
      const el = document.getElementById(this.id);
      const { target } = e;

      if (this.extButtonId) {
        const extButton = document.getElementById(
          `dropdownButton${this.extButtonId}`
        );
        if (
          el !== target &&
          !el.contains(target) &&
          extButton !== target &&
          !extButton.contains(target)
        ) {
          if (this.show) {
            this.$emit("on-close");
          }
          this.show = false;
        }
        return;
      }
      if (el !== target && !el.contains(target)) {
        if (this.show) {
          this.$refs[`dropdownButton${this.id}`].toggleIcon();
        }
        this.show = false;
      }
    },
    toggleDropdown() {
      this.onScroll();
      const that = this;
      setTimeout(function() {
        that.show = !that.show;
      }, 100);
    },
    onScroll() {
      if (!this.adjust) {
        return;
      }
      const dropdownButton = document.getElementById(
        `dropdownButton${this.id}`
      );
      const dropdownContent = this.$refs[`dropdownContent${this.id}`];
      const dropdown = this.$refs[`dropdown${this.id}`];
      const windowHeight = window.innerHeight;
      const dropdownContentLeftSpace = dropdownContent.getBoundingClientRect()
        .left;
      const rightSpace =
        window.innerWidth -
        dropdownButton.getBoundingClientRect().left -
        dropdownButton.getBoundingClientRect().width;
      const leftSpace = dropdownContent.getBoundingClientRect().left;
      if (!this.checking) {
        this.checking = true;
        const that = this;
        setTimeout(function() {
          // place dropdown above
          if (
            dropdownContent.getBoundingClientRect().height +
              dropdown.getBoundingClientRect().top >
            windowHeight + 20
          ) {
            dropdownContent.style.position = `absolute`;
            dropdownContent.style.left = 0;
            dropdownContent.style.right = 0;
            dropdownContent.style.top = `-${dropdownContent.clientHeight +
              10}px`;
            // console.log("exceeds");
          }
          // place dropdown below
          if (
            dropdownContent.getBoundingClientRect().height +
              dropdown.getBoundingClientRect().top <
            windowHeight + 20
          ) {
            dropdownContent.style.position = `absolute`;
            dropdownContent.style.right = 0;
            dropdownContent.style.left = 0;
            dropdownContent.style.top = `${45}px`;
            // console.log("does not exceed");
          }
          // set fixed top position
          if (that.fixedWidth) {
            dropdownContent.style.top = `-${5}px`;
          }
          // stick dropdown to top
          if (dropdown.getBoundingClientRect().top < 20) {
            dropdownContent.style.position = `fixed`;
            dropdownContent.style["z-index"] = 10000;
            dropdownContent.style.top = 0;
            dropdownContent.style.left = `${dropdownContentLeftSpace}px`;
            dropdownContent.style.right = `${rightSpace}px`;
            if (that.fixedWidth) {
              dropdownContent.style.cssText =
                dropdownContent.style.cssText +
                ` left: ${leftSpace}px !important;`;
              dropdownContent.style.right = `${rightSpace}px`;
              dropdownContent.style.top = 0;
            }
            // console.log("at top");
          }

          that.checking = false;
        }, 50);
      }
    }
  },
  created() {
    document.addEventListener("click", this.clear);
    document.addEventListener("scroll", this.onScroll);
    document.addEventListener("resize", this.onScroll);
  },
  unmounted() {
    document.removeEventListener("click", this.clear);
    document.removeEventListener("scroll", this.onScroll);
    document.removeEventListener("resize", this.onScroll);
  }
};
</script>

<style scoped>
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
  /*top: 45px;*/
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

.dropdown.delivery .dropdown-content {
  /*top: 48px;*/
}
.dropdown.stores .dropdown-content {
  /*top: 45px;*/
}
.dropdown.location-search-dropdown .dropdown-content {
  top: 14px !important;
  /*right: -25% !important;*/
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
  .dropdown.stores-dropdown {
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
  .delivery-dropdown .dropdown-content {
    left: 0 !important;
  }
  .dropdown.location-search-dropdown .dropdown-content {
    /*right: -10% !important;*/
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  .dropdown.stores-dropdown {
    min-width: 50%;
    margin: 0 auto;
  }
  .dropdown-content {
    left: unset !important;
    right: 0;
    width: 265px;
  }
  .delivery-dropdown .dropdown-content {
    left: 0 !important;
  }
  .dropdown.location-search-dropdown {
    display: none !important;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .dropdown.stores-dropdown {
    min-width: 70%;
    margin: 0 auto;
  }
  .dropdown-content {
    left: unset !important;
    right: 0;
    width: 265px;
  }
  .delivery-dropdown .dropdown-content {
    left: 0 !important;
  }
  .dropdown.location-search-dropdown {
    display: none !important;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
