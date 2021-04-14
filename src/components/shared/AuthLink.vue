<template>
  <button class="d-flex sign-in-sign-up-link items-center justify-center w-100">
    <span class="mr-half">
      <inline-svg
        :size="15"
        :path="require(`!html-loader!../../assets/svgs/user-profile.svg`)"
      />
    </span>
    Sign In/Sign Up
  </button>
</template>

<script>
export default {
  name: "AuthLink"
};
</script>

<style scoped>
.sign-in-sign-up-link {
  background: #ca3114;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 15px 30px -10px rgba(202 49 20 / 60%);
  border: 0;
  color: #fff;
  transition: background 0.7s ease;
  border-radius: 5px;
  text-decoration: none;
  height: 40px;
}
@media (hover: none) {
  a.sign-in-sign-up-link:hover {
    background-color: initial !important;
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
