<template>
  <div style="background-color: red; height: 500px" class="d-flex lander ">
    <div class="logo-wrap d-flex items-center justify-center mr-2">
      <logo :size="100" />
    </div>
    <div class="flex-grow">
      <h1>
        Demo Restaurant
      </h1>
      <span>Bakery & Cakes, Fries & Grills, Fast Foods, Alcohol </span>
      <ul class="h-list">
        <li>
          <button>5.0 (1 reviews)</button>
        </li>
        <li>1.58 KM Away</li>
      </ul>
      <ul class="h-list">
        <li>
          <span>open</span>
        </li>
        <li>
          <button>more info</button>
        </li>
      </ul>
      <hr />
      <div class="d-flex justify-between">
        <div>
          ledt
        </div>
        <div>
          right
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/Logo";
export default {
  name: "Lander",
  components: { Logo }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.logo-wrap {
  background-color: #fff;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  text-align: center;
}
.lander {
  padding: 2rem 3rem;
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
