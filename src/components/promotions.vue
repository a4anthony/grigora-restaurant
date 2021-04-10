<template>
  <div class="promo" id="promotions">
    <div class="promo-caption">
      <span>Ongoing </span><span class="text-yellow">Promos</span>
    </div>
    <span class="d-block  promo-sub-caption">Apply promo at checkout </span>
    <img
      src="../assets/images/promo.jpeg"
      alt=""
      @mouseenter="showPromoText = !showPromoText"
      @mouseleave="showPromoText = !showPromoText"
    />
    <span class="d-block  promo-bottom-text text-center">Welcome Promo</span>

    <div v-if="showPromoText" class="promo-text" style="visibility: visible; ">
      Welcome promo for new customers on orders above 500 from this restaurant -
      GET 20% OFF orders above ₦500
    </div>
  </div>
</template>

<script>
export default {
  name: "promotions",
  data() {
    return {
      showPromoText: false
    };
  }
};
</script>

<style scoped>
.promo-text {
  font-size: 13px;
  color: #fafafa;
  background: #757575;
  border-radius: 4px;
  text-transform: none;
  font-weight: 400;
  padding: 6px 10px;
  z-index: 9000;
  position: absolute !important;
  overflow-y: auto;
  overflow-x: hidden;
  left: 0;
  bottom: -40px;
}
.promo-caption {
  margin: 2.5rem 0 0.3rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.promo-sub-caption {
  margin-bottom: 1.5rem;
  color: #999;
}
.promo-bottom-text {
  width: 30%;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
}
img {
  width: 30%;
}
.promo {
  /*padding-left: 5rem;*/
  position: relative;
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
  .promo {
    /*padding-left: 1rem;*/
    position: relative;
  }
  img,
  .promo-bottom-text {
    width: 50%;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
