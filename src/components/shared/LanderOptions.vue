<template>
  <div class=" lander-options">
    <ul class="d-flex justify-right-end">
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
              :path="require(`!html-loader!../../assets/svgs/users.svg`)"
            /> </span
          >Start Group Order
        </button>
      </li>
      <li>
        <button class="transparent-btn">Book a table</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
export default {
  name: "LanderOptions",
  components: { Dropdown }
};
</script>

<style scoped>
.transparent-btn {
  border-radius: 28px;
  border: 2px solid #fff;
  color: #fff;
  padding: 0 1rem;
  font-size: 0.9rem;
  height: 38px;
}
.transparent-btn svg path {
  fill: #fff !important;
}
.lander-options ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
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
  .lander-options ul li {
    /*flex-shrink: 0;*/
    margin-right: 0.8rem;
    flex: 0 0 auto;
    /*width: 400px;*/
  }
  .lander ul li:last-child {
    margin-right: 0;
  }
  .lander-options {
  }
  .lander-options ul {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    /*width: 500px;*/
    justify-content: unset;
  }
  .lander-options {
    margin-bottom: 1rem;
  }
  .transparent-btn {
    /*padding: 0 3rem;*/
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
