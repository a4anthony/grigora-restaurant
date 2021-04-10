<template>
  <div
    id="lander"
    class="d-flex lander flex-wrap"
    :style="{
      background:
        'linear-gradient(147deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(' +
        data.restaurant_profile_image +
        ') center center no-repeat',
      backgroundSize: 'cover'
    }"
  >
    <div class="logo-wrap d-flex items-center justify-center mr-1">
      <logo :size="80" />
    </div>
    <div class="flex-grow text-white">
      <h1 class="m-0">
        {{ data.restaurant_name }}
      </h1>
      <span class="d-inline-block mb-1">{{ data.cuisines }}</span>
      <div class="mb-1">
        <ul class="h-list dots-after">
          <li>
            <button class="reviews-btn">
              <fa :icon="['far', 'star']" /> 5.0 (1 reviews)
            </button>
          </li>
          <li>1.58 KM Away</li>
        </ul>
      </div>
      <div class="mb-1">
        <ul class="d-flex dots-after">
          <li class="d-flex items-center">
            <span class="store-status d-block open">open</span>
          </li>
          <li class="d-flex items-center">
            <button class="more-info-btn d-flex items-center">
              <span class="mr-half">
                <inline-svg
                  :size="25"
                  :path="require(`!html-loader!../assets/svgs/exclamation.svg`)"
                /> </span
              >more info
            </button>
          </li>
        </ul>
      </div>
      <div class="d-flex flex-wrap justify-between store-details">
        <div>
          <div class="mb-1">
            <ul class="d-flex">
              <li class="mr-1">
                <span class="d-block text-yellow store-details-info"
                  >Min. Order</span
                >
                <span class="store-details-info-value text-white">₦ 200</span>
              </li>
              <li class="mr-1">
                <span class="d-block text-yellow store-details-info"
                  >Prep. Time</span
                >
                <span class="store-details-info-value text-white"
                  >{{ data.estimated_preparing_time }} mins</span
                >
              </li>
              <li>
                <span class="d-block text-yellow store-details-info"
                  >Delivery Fee</span
                >
                <span class="store-details-info-value text-white"
                  >₦ {{ data.delivery_fee }}</span
                >
              </li>
            </ul>
          </div>
          <span class="d-block text-yellow text-center">Chose a Menu</span>
          <dropdown :options="data.all_data" classes="stores">
            <template v-slot:option="{ item }">
              <span class="mr-half">{{ item.category_name }}</span>
              <span>[{{ item.start_time }} - {{ item.end_time }}]</span>
            </template>
          </dropdown>
        </div>
        <div class="mb-1">
          <ul class="d-flex">
            <li class="mr-half">
              <dropdown
                label="Delivery"
                classes="delivery"
                :options="['Delivery', 'Pick up order']"
              >
                <template v-slot:option="{ item }">
                  <span>{{ item }}</span>
                </template>
              </dropdown>
            </li>
            <li class="mr-half">
              <button class="transparent-btn d-flex items-center">
                <span class="mr-half">
                  <inline-svg
                    :size="20"
                    :path="require(`!html-loader!../assets/svgs/users.svg`)"
                  /> </span
                >Start Group Order
              </button>
            </li>
            <li>
              <button class="transparent-btn">Book a table</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/Logo";
import { appData } from "@/data";
import Dropdown from "@/components/Dropdown";
export default {
  name: "Lander",
  components: { Dropdown, Logo },
  computed: {
    data() {
      return appData();
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul.dots-after li:after {
  content: "•";
  margin: 0 0.6rem;
}
ul.dots-after li:last-child:after {
  content: "";
}
.logo-wrap {
  background-color: #fff;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  text-align: center;
}
.lander {
  padding: 2.5rem 3rem;
}
.store-details {
  border-top: 1px solid hsla(0, 0%, 100%, 0.4);
  padding-top: 1rem;
}
.transparent-btn {
  border-radius: 28px;
  border: 2px solid #fff;
  color: #fff;
  padding: 0 1rem;
  font-size: 0.9rem;
  height: 43px;
}
.transparent-btn svg path {
  fill: #fff !important;
}
.store-details-info {
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 12px;
  text-transform: capitalize;
  margin-bottom: 0.6rem;
}
.store-details-info-value {
  font-weight: 700;
  font-size: 1.35rem;
}
.store-status {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.1rem;
}
.store-status.open {
  color: #21ba85;
}
.store-status.closed {
  color: red;
}
.reviews-btn,
.more-info-btn {
  color: #ffff;
  background-color: transparent;
  border-radius: 5px;
  padding: 0.5rem 0.2rem;
  text-transform: uppercase;
}
.transparent-btn:hover,
.reviews-btn:hover,
.more-info-btn:hover {
  background-color: rgba(238, 236, 236, 0.3);
}

.more-info-btn svg path {
  fill: #fff !important;
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
