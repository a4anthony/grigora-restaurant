<template>
  <div class="cart">
    <div v-if="onlyHeader" class="cart-info d-flex items-center">
      <span class="mr-half">
        <inline-svg
          :path="require(`!html-loader!../assets/svgs/cart.svg`)"
          :size="20"
        />
      </span>
      Cart({{ data.total_cart_item }})
    </div>
    <div v-if="!onlyHeader" class="cart-tab  text-center">
      <img
        class="d-block"
        src="../assets/images/empty-cart.png"
        alt=""
        width="200"
        style="margin: 0 auto 1rem auto"
      />
      <span class="d-block cart-text">Your cart is empty right now</span>
      <span class="d-block cart-text">...but not for long.</span>
    </div>
  </div>
</template>

<script>
import { appData } from "@/data";

export default {
  name: "Cart",
  props: {
    onlyHeader: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    data() {
      return appData();
    }
  }
};
</script>

<style scoped>
.cart {
  background-color: #fbfbfc;
  display: flex;
}
.cart-text {
  color: #999;
  font-size: 0.9rem;
}
.cart-info {
  width: 100%;
  height: 41px;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 1rem;
  border-left: 1px solid #b8b8b8;
  background-color: #fbfbfc;
  font-weight: 700;
  color: #333;
}
.cart-tab {
  background-color: #fbfbfc;
  -webkit-box-shadow: -2px 4px 5px 0 rgb(59 59 59 / 20%);
  -moz-box-shadow: -2px 4px 5px 0 rgb(59 59 59 / 20%);
  box-shadow: -2px 4px 5px 0 rgb(59 59 59 / 20%);
  width: 100%;
  padding: 3rem;
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
  .cart-info,
  .cart-tab {
    display: none;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
