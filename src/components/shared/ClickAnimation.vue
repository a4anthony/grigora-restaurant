<template>
  <div
    class="overlay"
    :style="{
      backgroundColor: backgroundColor
    }"
    :class="showClickAnimation ? 'animate' : 'hidden'"
  ></div>
</template>

<script>
export default {
  name: "ClickAnimation",
  props: {
    classes: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showClickAnimation: false
    };
  },
  methods: {
    toggleAnimation() {
      this.showClickAnimation = true;
      const that = this;
      setTimeout(function() {
        that.showClickAnimation = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 0;
  bottom: 0;
  background-color: inherit;
  opacity: 0.4;
  padding: 0;
  border-radius: inherit;
  margin: 0 auto;
}

.animate {
  -webkit-animation: animate 0.5s forwards;
  animation: animate 0.5s forwards;
}

@keyframes animate {
  0% {
    width: 0;
  }
  100% {
    right: 0;
    width: 100%;
  }
}
@-webkit-keyframes animate {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
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
