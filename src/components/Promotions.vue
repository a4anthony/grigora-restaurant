<template>
  <div class="promo" id="promotions">
    <!--section header-->
    <section-header
      :title="`<span>Ongoing </span><span class='text-yellow'>Promos</span>`"
      caption="Apply promo at checkout "
    />
    <!--promo image-->
    <img
      src="../assets/images/promo.jpeg"
      alt=""
      @mouseenter="showPromoText = !showPromoText"
      @mouseleave="showPromoText = !showPromoText"
    />
    <!--promo bottom text-->
    <span class="d-block  promo-bottom-text text-center">Welcome Promo</span>
    <!--promo text-->
    <div
      class="promo-text"
      :class="showPromoText ? 'slide-down visible' : 'slide-up hidden'"
      ref="promoText"
      :style="promoTextStyles"
    >
      Welcome promo for new customers on orders above 500 from this restaurant -
      GET 20% OFF orders above ₦500
    </div>
  </div>
</template>

<script>
import SectionHeader from "@/components/shared/SectionHeader";
export default {
  name: "Promotions",
  components: { SectionHeader },
  data() {
    return {
      showPromoText: false,
      promoTextStyles: {}
    };
  },
  mounted() {
    this.promoTextStyles.left = `-${
      this.$refs.promoText.getBoundingClientRect().left
    }px`;
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
  margin-top: 2rem;
  position: relative;
}

.slide-down {
  -webkit-animation: slide-down 0.5s forwards;
  animation: slide-down 0.5s forwards;
}
.slide-up {
  -webkit-animation: slide-up 0.5s forwards;
  animation: slide-up 0.5s forwards;
}

@keyframes slide-down {
  0% {
    z-index: 10;
    bottom: 0;
  }
  100% {
    bottom: -40px;
    z-index: 50;
  }
}
@keyframes slide-up {
  0% {
    z-index: 50;
    bottom: -40px;
  }
  100% {
    bottom: 0;
    z-index: 10;
  }
}

@-webkit-keyframes slide-down {
  0% {
    z-index: 10;
    bottom: 0;
  }
  100% {
    bottom: -40px;
    z-index: 50;
  }
}

@-webkit-keyframes slide-up {
  0% {
    z-index: 50;
    bottom: -40px;
  }
  100% {
    bottom: 0;
    z-index: 10;
  }
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
  img,
  .promo-bottom-text {
    width: 40%;
  }
  .promo-bottom-text {
    margin-top: 15px;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .promo {
    position: relative;
  }
  img,
  .promo-bottom-text {
    width: 50%;
  }
  .promo-bottom-text {
    margin-top: 15px;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
