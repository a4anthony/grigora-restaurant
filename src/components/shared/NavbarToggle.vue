<template>
  <button
    class="menu-toggle d-flex items-center justify-center"
    @click="$emit('toggle-side-drawer')"
  >
    <span>
      <fa :icon="['fas', 'bars']" />
    </span>
  </button>
</template>

<script>
export default {
  name: "NavbarToggle"
};
</script>

<style scoped>
.menu-toggle {
  height: 43px;
  background-color: #fff;
  border-radius: 75%;
  font-size: 20px;
  width: 100%;
  color: #666;
}
.menu-toggle:hover {
  background-color: #efefef;
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
