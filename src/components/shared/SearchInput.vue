<template>
  <div class="search-form" :class="activeInput && 'active'">
    <!--label-->
    <label
      :for="`query${id}`"
      :class="[activeLabel && 'active', activeInput && 'set-color']"
      >{{ placeholder }}</label
    >
    <!--input -->
    <input
      :id="`query${id}`"
      type="text"
      class="w-100"
      v-model="searchQuery"
      @focusin="searchFocus"
      @focusout="searchFocus"
    />
    <!--appended button-->
    <button v-if="!hideButton" class="search-btn">
      <span>
        <fa :icon="['fas', 'search']" />
      </span>
    </button>
  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";

export default {
  name: "SearchInput",
  props: {
    hideButton: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  computed: {
    id() {
      return `__input__${uniqueId()}`;
    }
  },
  data() {
    return {
      activeLabel: false,
      activeInput: false,
      searchQuery: ""
    };
  },
  methods: {
    searchFocus() {
      this.activeInput = !this.activeInput;
      if (!this.searchQuery) {
        this.activeLabel = !this.activeLabel;
      }
    }
  }
};
</script>

<style scoped>
.search-form {
  position: relative;
}
.search-form:hover {
  cursor: text;
}
.search-form label {
  transition: all 0.5s ease;
  position: absolute;
  left: 10px;
  top: 12px;
  font-size: 0.85rem;
  color: #656363;
}
.search-form label:hover {
  cursor: text;
}
.search-form label.active {
  transition: all 0.5s ease;
  position: absolute;
  left: 10px;
  font-size: 10px;
  top: 6px;
}
.search-form label.set-color {
  color: #e39419;
}
.search-form input {
  height: 40px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 13px;
  padding: 14px 60px 2px 10px;
  line-height: 24px;
  border: 1px solid #969594;
}
.search-form.active::before {
  transition: all 0.5s ease;
  position: absolute;
  border: 3px solid #e39419;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  content: "";
  border-radius: 5px;
}

.search-form input:focus {
}
.search-btn {
  background-color: #fff;
  position: absolute;
  right: 4px;
  /*width: 40px;*/
  height: 32px;
  top: 4px;
  font-size: 14px;
  padding: 0 0.8rem;
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
