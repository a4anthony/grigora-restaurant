<template>
  <ul class="d-flex store-details">
    <!--min order-->
    <li class="mr-1">
      <span class="d-block text-yellow store-details-info">Min. Order</span>
      <span class="store-details-info-value text-white">₦ 200</span>
    </li>
    <!--prop time-->
    <li class="mr-1">
      <span class="d-block text-yellow store-details-info">Prep. Time</span>
      <span class="store-details-info-value text-white"
        >{{ data.estimated_preparing_time }} mins</span
      >
    </li>
    <!--delivery fee-->
    <li>
      <span class="d-block text-yellow store-details-info">Delivery Fee</span>
      <span class="store-details-info-value text-white"
        >From ₦ {{ data.delivery_fee }}</span
      >
    </li>
  </ul>
</template>

<script>
import { appData } from "@/data";

export default {
  name: "StoreDetails",
  computed: {
    data() {
      return appData();
    }
  }
};
</script>

<style scoped>
.store-details {
  margin: 10px 0 16px 0;
}
.store-details-info {
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 12px;
  text-transform: capitalize;
  margin-bottom: 0.6rem;
}
.store-details-info-value {
  font-weight: 600;
  font-size: 1.2rem;
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
  .store-details {
    margin-bottom: 1rem;
  }
  .store-details li {
    text-align: center;
  }
  .store-details-info {
    font-size: 0.85rem;
  }
  .store-details-info-value {
    font-size: 1.1rem;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
