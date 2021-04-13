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
    <!--logo-->
    <div class="logo-wrap d-flex justify-center mr-1">
      <div class="logo d-flex justify-center items-center">
        <logo :size="80" />
      </div>
    </div>
    <div class="flex-grow text-white">
      <!--restaurant name-->
      <h1 class="m-0 restaurant-name">
        {{ data.restaurant_name }}
      </h1>
      <!--restaurant cuisines-->
      <span class="d-block mb-1 restaurant-cuisines">
        Bakery & Cakes, Fries & Grills, Fast Foods, Alcohol
      </span>
      <!--reviews and distance-->
      <div class="mb-half centered-sm centered-md">
        <ul class="h-list dots-after">
          <li>
            <button class="reviews-btn">
              <fa :icon="['far', 'star']" /> 5.0 (1 reviews)
            </button>
          </li>
          <li>1.58 KM Away</li>
        </ul>
      </div>
      <!--store open and more info-->
      <div class="mb-half centered-sm centered-md">
        <ul class="d-flex dots-after">
          <li class="d-flex items-center">
            <span
              v-if="storeStatus"
              class="store-status d-flex items-center  open"
              >open</span
            >
            <span v-else class="store-status d-flex items-center  closed"
              >closed</span
            >
          </li>
          <li class="d-flex items-center">
            <button class="more-info-btn d-flex items-center">
              <span class="mr-half">
                <inline-svg
                  :size="19"
                  :path="require(`!html-loader!../assets/svgs/exclamation.svg`)"
                /> </span
              >more info
            </button>
          </li>
        </ul>
      </div>
      <!--line separator-->
      <div class="line-separator"></div>
      <!--store details and options-->
      <div
        class="d-flex justify-between flex-wrap centered-sm centered-md store-details-options"
      >
        <!--store details-->
        <div class="mb-1 centered-sm centered-md lander-store-details">
          <store-details />
        </div>
        <!--lander options-->
        <div>
          <lander-options />
        </div>
      </div>
      <!--menu selector-->
      <div>
        <menu-selector />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/Logo";
import { appData } from "@/data";
import LanderOptions from "@/components/shared/LanderOptions";
import StoreDetails from "@/components/shared/StoreDetails";
import MenuSelector from "@/components/shared/MenuSelector";
export default {
  name: "Lander",
  components: {
    MenuSelector,
    StoreDetails,
    LanderOptions,
    Logo
  },
  computed: {
    data() {
      return appData();
    },
    storeStatus() {
      const today = new Date();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      const closingTime = this.data.closing_time;
      const openingTime = this.data.opening_time;

      if (
        this.toMins(time) === this.toMins(closingTime) ||
        this.toMins(time) > this.toMins(closingTime) ||
        this.toMins(time) < this.toMins(openingTime)
      ) {
        return false;
      }

      return (
        this.toMins(time) === this.toMins(openingTime) ||
        (this.toMins(time) > this.toMins(openingTime) &&
          this.toMins(time) < this.toMins(closingTime))
      );
    }
  },
  mounted() {},
  methods: {
    toMins(time) {
      const expTime = time.split(":");
      let hour = null;
      let min = null;
      let sec = null;
      let minsArr = [];

      if (expTime.length === 3) {
        hour = expTime[0];
        min = expTime[1];
        sec = expTime[2];
      }
      if (expTime.length === 2) {
        hour = expTime[0];
        min = expTime[1];
      }

      if (hour) {
        minsArr.push(Number(hour) * 60);
      }
      if (min) {
        minsArr.push(Number(min));
      }
      if (sec) {
        minsArr.push(Number(sec) / 60);
      }

      return minsArr.reduce((a, b) => a + b, 0);
    }
  }
};
</script>

<style scoped>
.line-separator {
  height: 1px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.4);
}
.store-details-options {
  margin-top: 10px;
}
.restaurant-cuisines {
  font-size: 0.95rem;
}
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
.logo-wrap .logo {
  background-color: #fff;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  text-align: center;
}
.lander {
  padding: 2.5rem 3rem;
}

.store-status {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.1rem;
  height: 35px;
  padding-top: 0.2rem;
}
.store-status.open {
  color: #21ba85;
}
.store-status.closed {
  color: #c10015;
}
.more-info-btn {
  margin-top: 0.2rem;
}
.reviews-btn,
.more-info-btn {
  font-size: 0.9rem;
  color: #ffff;
  background-color: transparent;
  border-radius: 5px;
  padding: 0.2rem;
  text-transform: uppercase;
  height: 35px;
}
.reviews-btn:hover,
.more-info-btn:hover {
  background-color: rgba(238, 236, 236, 0.3);
}
.reviews-btn .flex-items-center,
.more-info-btn .flex-items-center {
  position: relative;
  top: 2px;
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
  .lander {
    padding: 20px;
    justify-content: center;
  }
  .restaurant-cuisines,
  .restaurant-name {
    text-align: center;
  }
  .restaurant-name {
    font-size: 1.8rem;
    margin: 10px 0;
    font-weight: 700;
    line-height: 1.8rem;
  }
  .restaurant-cuisines {
    margin: 10px 0;
  }
  .logo-wrap .logo {
    margin: 20px 0 0 0;
  }
  .lander-store-details {
    width: 100%;
  }
  .store-details-options {
    margin-bottom: 1.5rem;
  }
  .line-separator {
    margin: 20px 0;
  }
  .logo-wrap {
    width: 100%;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  .lander {
    padding: 20px;
    justify-content: center;
  }
  .restaurant-cuisines,
  .restaurant-name {
    text-align: center;
  }
  .restaurant-name {
    font-size: 1.8rem;
    margin: 10px 0;
    font-weight: 700;
    line-height: 1.8rem;
  }
  .restaurant-cuisines {
    margin: 10px 0;
  }
  .logo-wrap .logo {
    margin: 20px 0 0 0;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .lander {
    padding: 20px;
    justify-content: center;
  }
  .restaurant-cuisines,
  .restaurant-name {
    text-align: center;
  }
  .restaurant-name {
    font-size: 1.8rem;
    margin: 10px 0;
    font-weight: 700;
    line-height: 1.8rem;
  }
  .restaurant-cuisines {
    margin: 10px 0;
  }
  .logo-wrap .logo {
    margin: 20px 0 0 0;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
