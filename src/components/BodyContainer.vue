<template>
  <div class="body-container">
    <div class="main-content"><slot name="main"></slot></div>
    <div class="side-content"><slot name="side"></slot></div>
  </div>
</template>

<script>
export default {
  name: "BodyContainer"
};
</script>

<style scoped>
.body-container {
  display: flex;
}
.side-content {
  width: 28%;
}

.main-content {
  width: 72%;
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
  .side-content {
    display: none;
  }
  .main-content {
    width: 100%;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  .side-content {
    display: none;
  }
  .main-content {
    width: 100% !important;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .main-content {
    width: 100% !important;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
