<template>
  <nav class="navbar d-flex justify-between items-center">
    <!--left tab-->
    <div class="d-flex items-center w-25 nav-left-tab">
      <!--logo-->
      <div class="mr-1">
        <logo />
      </div>
      <!--location dropdown selector-->
      <div
        id="navLocationSelector"
        class="mr-1 nav-location-selector flex-grow"
        style="position:relative;"
      >
        <location-selector />
      </div>
      <div class="nav-navbar-toggle-sm">
        <navbar-toggle @toggle-side-drawer="sideDrawerOpen = !sideDrawerOpen" />
      </div>
    </div>
    <!--right tab-->
    <div class="d-flex items-center flex-grow nav-right-tab">
      <!--search input-->
      <div class="mr-1 flex-grow nav-search-input">
        <search-input placeholder="Search for vendors and cuisines" />
      </div>
      <!--auth link-->
      <div class="mr-1 nav-auth-link">
        <auth-link />
      </div>
      <!--navbar toggle-->
      <div class="nav-navbar-toggle">
        <navbar-toggle @toggle-side-drawer="sideDrawerOpen = !sideDrawerOpen" />
      </div>
    </div>
    <side-drawer
      :is-open="sideDrawerOpen"
      @toggle-side-drawer="sideDrawerOpen = !sideDrawerOpen"
    />
    <div
      class="overlay"
      :class="sideDrawerOpen ? 'visible' : 'hidden'"
      @click="sideDrawerOpen = !sideDrawerOpen"
    ></div>
  </nav>
</template>

<script>
import Logo from "@/Logo";
import LocationSelector from "@/components/shared/LocationSelector";
import SearchInput from "@/components/shared/SearchInput";
import AuthLink from "@/components/shared/AuthLink";
import NavbarToggle from "@/components/shared/NavbarToggle";
import SideDrawer from "@/components/shared/SideDrawer";
export default {
  name: "NavigationBar",
  components: {
    SideDrawer,
    NavbarToggle,
    AuthLink,
    SearchInput,
    LocationSelector,
    Logo
  },
  data() {
    return {
      sideDrawerOpen: false
    };
  }
};
</script>

<style scoped>
.navbar {
  padding: 0 3rem;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
  height: 65px;
  -webkit-box-shadow: 0 2px 10px 0px rgb(0 0 0 / 10%);
  -moz-box-shadow: 0 2px 10px 0px rgb(0 0 0 / 10%);
  box-shadow: 0 2px 10px 0px rgb(0 0 0 / 10%);
}
.nav-left-tab {
  width: 40%;
}
.nav-location-selector {
  padding-right: 25%;
}
.nav-navbar-toggle-sm {
  display: none;
}
.nav-auth-link {
  width: 30%;
}
.nav-navbar-toggle {
  width: 15%;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
  .nav-search-input {
    display: none;
  }
  .nav-left-tab {
    width: 60%;
  }
  .nav-auth-link {
    width: 65%;
  }
  .nav-right-tab {
    justify-content: flex-end;
  }
  .nav-location-selector {
    padding: 0 10% 0 0;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  .nav-right-tab {
    display: none;
  }
  .nav-left-tab {
    width: 100%;
    justify-content: space-between;
  }
  .nav-navbar-toggle-sm {
    width: 20%;
    display: block;
  }
  .nav-location-selector {
    padding: 0 10%;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .search-form,
  .auth-links,
  .nav-auth-link {
    display: none;
  }
  .navbar {
    padding: 0 1rem;
  }
  .nav-navbar-toggle {
    display: none;
  }
  .nav-left-tab {
    width: 100%;
    justify-content: space-between;
  }
  .nav-right-tab {
    display: none;
  }
  .nav-location-selector {
    padding-right: 0;
  }
  .nav-navbar-toggle-sm {
    width: 20%;
    display: block;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
