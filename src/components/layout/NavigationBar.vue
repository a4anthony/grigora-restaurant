<template>
  <nav>
    <div class="d-flex justify-between">
      <div class="d-flex items-center flex-grow w-25">
        <div class="mr-1">
          <logo />
        </div>
        <div class="mr-1">
          <button class="nav-location-search-btn d-flex">
            <span class="mr-1">
              <inline-svg
                :size="15"
                :path="
                  require(`!html-loader!../../assets/svgs/placeholder.svg`)
                "
              />
            </span>
            Wuse 2, Abuja
            <span class="ml-1">
              <fa :icon="['fas', 'chevron-down']" />
            </span>
          </button>
        </div>
      </div>
      <div class="d-flex items-center flex-grow">
        <div
          class="mr-1 search-form flex-grow"
          :class="activeInput && 'active'"
        >
          <label
            for="query"
            :class="[activeLabel && 'active', activeInput && 'set-color']"
            >Search for vendors and cuisines</label
          >
          <input
            id="query"
            type="text"
            class="w-100"
            v-model="searchQuery"
            @focusin="searchFocus"
            @focusout="searchFocus"
          />
          <button class="search-btn">
            <span>
              <fa :icon="['fas', 'search']" />
            </span>
          </button>
        </div>
        <div class="mr-1 auth-links ">
          <a href="#" class="d-flex sign-in-sign-up-link items-center">
            <span class="mr-half">
              <inline-svg
                :size="15"
                :path="
                  require(`!html-loader!../../assets/svgs/user-profile.svg`)
                "
              />
            </span>
            Sign In/Sign Up
          </a>
        </div>
        <div>
          <button class="menu-toggle d-flex items-center">
            <span>
              <fa :icon="['fas', 'bars']" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "@/Logo";
export default {
  name: "NavigationBar",
  components: { Logo },
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
nav {
  padding: 0.1rem 3rem;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
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
  .search-form,
  .auth-links {
    display: none;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
