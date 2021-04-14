<template>
  <modal-container
    reference="moreInfoModal"
    :show="show"
    close-commit="setShowMoreInfoModal"
  >
    <div class="more-info-modal">
      <h1>{{ data.restaurant_name }}</h1>
      <ul>
        <li v-for="(info, index) in infos" :key="`info${index}`" class="d-flex">
          <span class="icon ml-1 mr-2 d-flex justify-center">
            <inline-svg :size="22" :path="info.iconPath" />
          </span>
          <span class="d-flex flex-column">
            <span class="text d-block">{{ info.text }}</span>
            <span class="info d-block">{{ info.info }}</span>
          </span>
        </li>
      </ul>
    </div>
  </modal-container>
</template>

<script>
import { appData } from "@/data";
import ModalContainer from "@/components/ModalContainer";

export default {
  name: "MoreInfoModal",
  components: { ModalContainer },
  computed: {
    data() {
      return appData();
    },
    show() {
      return this.$store.state.showMoreInfoModal;
    }
  },
  data() {
    return {
      infos: []
    };
  },
  mounted() {
    this.infos = [
      {
        text: "Address",
        info: this.data.address,
        iconPath: require(`!html-loader!../../assets/svgs/placeholder.svg`)
      },
      {
        text: "Opening Time",
        info: this.data.opening_time,
        iconPath: require(`!html-loader!../../assets/svgs/clock.svg`)
      },
      {
        text: "Closing Time",
        info: this.data.closing_time,
        iconPath: require(`!html-loader!../../assets/svgs/clock.svg`)
      },
      {
        text: "Average Rating",
        info: `5.0 Stars`,
        iconPath: require(`!html-loader!../../assets/svgs/star.svg`)
      }
    ];
  }
};
</script>

<style scoped>
.more-info-modal .text {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0125em;
  margin-bottom: 5px;
  color: #212121 !important;
}
.more-info-modal .info {
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.0125em;
  color: #212121 !important;
}
.more-info-modal ul {
  margin: 40px 0 20px;
  padding: 0;
  list-style-type: none;
}
.more-info-modal ul li {
  margin-bottom: 1.5rem;
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
  .more-info-modal ul {
    padding: 0;
    list-style-type: none;
  }
  .text {
    font-size: 1rem;
  }
  .info {
    font-size: 0.7rem;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
