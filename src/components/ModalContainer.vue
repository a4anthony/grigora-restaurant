<template>
  <div
    :ref="reference"
    class="modal d-flex justify-center items-center"
    :class="[show ? 'visible' : 'hidden', classes]"
  >
    <!--modal backdrop-->
    <div
      @click="
        backdropClose
          ? $store.commit(closeCommit)
          : (backdropShake = !backdropShake)
      "
      class="overlay"
    ></div>
    <!--modal content-->
    <div :ref="`${reference}Content`" class="modal-content">
      <!--close button-->
      <div
        v-if="closeButton"
        class="d-flex justify-right-end close-side-drawer"
      >
        <button
          @click="$store.commit(closeCommit)"
          class="close-side-drawer-btn d-flex justify-center items-center "
        >
          &times;
        </button>
      </div>
      <!--content-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalContainer",
  props: {
    reference: {
      type: String,
      required: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      required: false
    },
    closeCommit: {
      type: String,
      required: true
    },
    backdropClose: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      required: ""
    }
  },
  mounted() {},
  watch: {
    backdropShake(val) {
      const that = this;
      if (val) {
        this.$refs[`${this.reference}Content`].classList.remove("scale-in");
        this.$refs[`${this.reference}Content`].classList.remove("scale-out");
        this.$refs[`${this.reference}Content`].classList.add("backdrop-click");
        setTimeout(function() {
          that.backdropShake = false;
          that.$refs[`${that.reference}Content`].classList.remove(
            "backdrop-click"
          );
        }, 250);
      }
    },
    show(val) {
      if (val) {
        this.bodyScroll(false);
        this.$refs[`${this.reference}Content`].classList.remove("scale-out");
        this.$refs[`${this.reference}Content`].classList.add("scale-in");
      } else {
        this.bodyScroll(true);
        this.$refs[`${this.reference}Content`].classList.remove("scale-in");
        this.$refs[`${this.reference}Content`].classList.add("scale-out");
      }
    }
  },
  data() {
    return {
      backdropShake: false
    };
  }
};
</script>

<style scoped>
.close-side-drawer-btn {
  font-size: 30px;
  color: #999;
  background-color: #fff;
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 5px;
}
.close-side-drawer button:hover {
  background-color: #e5e4e4;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000000;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  z-index: 10;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%),
    0 1px 10px rgb(0 0 0 / 12%);
}

.modal-content {
  width: 40%;
}

.scale-in {
  animation: createBox 0.5s;
}
@keyframes createBox {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.scale-out {
  animation: scale-out 0.5s;
}
@keyframes scale-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}

.backdrop-click {
  animation: backdrop-click 0.2s;
}

@keyframes backdrop-click {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* (1366x768) WXGA Display */

@media screen and (min-width: 1366px) and (max-width: 1919px) {
  .location-search.modal {
    display: none !important;
  }
}

@media (min-width: 1198px) and (max-width: 1365.9px) {
  .location-search.modal {
    display: none !important;
  }
}

/* Normal desktop :992px. */

@media (min-width: 992px) and (max-width: 1197px) {
  .location-search.modal {
    display: none !important;
  }
}

/* Normal desktop :991px. */

@media (min-width: 768px) and (max-width: 991px) {
  .modal-content {
    width: 70%;
  }
  .location-search.modal {
    display: none !important;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  .modal-content {
    width: 70%;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .modal-content {
    width: 100%;
    height: 100%;
  }
  .location-search .modal-content {
    width: 90%;
    height: unset;
    padding: 0;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
