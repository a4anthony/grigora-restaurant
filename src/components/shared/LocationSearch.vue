<template>
  <div class="location-search">
    <div class="input">
      <search-input hide-button placeholder="Search for a new location" />
    </div>
    <button class="w-100 d-flex items-center location-search-btn">
      <span class="mr-1">
        <inline-svg
          :size="25"
          :path="require(`!html-loader!../../assets/svgs/gps.svg`)"
      /></span>
      <span>Detect Current location</span>
    </button>
  </div>
</template>

<script>
import SearchInput from "@/components/shared/SearchInput";
export default {
  name: "LocationSearch",
  components: { SearchInput }
};
</script>

<style scoped>
.location-search .input {
  padding: 20px;
}
.location-search-btn {
  padding: 15px 20px;
  border-radius: 0 0 5px 5px;
  background-color: #eeeded;
  font-weight: 600;
  color: #666;
}
.location-search-btn:hover {
  background-color: #d6d5d5;
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
