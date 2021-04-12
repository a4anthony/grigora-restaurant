<template>
  <div
    :class="[
      scrollable ? 'item-card-scrollable' : `item-card ${classes}`,
      item.status === '0' && 'cursor-disabled'
    ]"
  >
    <div class="d-flex" style="height: 100%">
      <div
        class="flex-grow mr-half item-img"
        :style="{
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundImage: `url(${item.image})`
        }"
      ></div>
      <div class="flex-grow" style="min-width: 1px; position: relative">
        <h6 class="item-title">{{ item.name }}</h6>
        <p class="item-description text-wrap">{{ item.description }}</p>
        <span
          class="item-rating"
          :class="item.avg_ratings === '0.0' ? 'bad' : 'good'"
        >
          <span style="margin-right: 2px">
            <fa :icon="['fas', 'star']" />
          </span>
          <span v-if="item.avg_ratings === 5">5.0</span>
          <span v-else>{{ item.avg_ratings }}</span>
        </span>
        <div
          class="d-flex justify-between"
          style="position: absolute; left: 0;bottom: 0;right: 0"
        >
          <p class="item-price">₦ {{ item.price }}</p>
          <p class="item-status" v-if="item.status === '0'">Not Available</p>
        </div>
        <!--<span class="text-wrap">{{ item.description }}</span>-->
      </div>
    </div>
    <div v-if="item.status === '0'" class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.item-card-scrollable:hover,
.item-card:hover {
  cursor: pointer;
}
.item-card:hover {
  box-shadow: 0 8px 18px -10px rgb(0 0 0 / 40%);
}
.item-card-scrollable:hover {
  box-shadow: 0 8px 18px -10px rgb(0 0 0 / 40%);
}
.item-card-scrollable.cursor-disabled:hover,
.item-card.cursor-disabled:hover {
  cursor: not-allowed !important;
}
.item-price {
  font-weight: 700;
  color: #424242;
  font-size: 0.95rem;
  margin: 0;
}
.item-status {
  font-weight: 700;
  color: #ca3114 !important;
  font-size: 0.85rem;
  margin: 0;
}
.item-rating {
  padding: 3px 6px;
  display: inline-block;
  border-radius: 4px;
  color: #fff !important;
  font-size: 0.7rem;
  margin-top: 0.3rem;
}
.item-rating.good {
  background-color: #21ba85 !important;
}
.item-rating.bad {
  background-color: #9e9e9e !important;
}
.item-title {
  font-weight: 700;
  font-size: 1.05rem;
  color: #424242;
  margin-top: 5px;
  margin-bottom: 5px;
}
.item-description {
  font-weight: 400;
  font-size: 0.8rem;
  color: #616161;
  line-height: 0.9rem;
  margin: 0;
}
.item-card-scrollable,
.item-card {
  height: 140px;
  border-radius: 5px;
  border: 1px solid #ecebeb;
  padding: 0.6rem;
  background-color: white;
  margin-right: 1rem;
  position: relative;
  transition: box-shadow 500ms;
}
.item-card {
  /*width: 50%;*/
}
.item-card-scrollable {
  flex: 0 0 auto;
  width: 360px;
}
.item-card-scrollable:last-child,
.item-card:last-child {
  margin-right: 0 !important;
}

.item-card-scrollable .item-img,
.item-card .item-img {
  border-radius: 5px;
  min-width: 30%;
  max-width: 30%;
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #f1eded42;
  border-radius: 5px;
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
  .item-card-scrollable {
    width: 100%;
    flex-shrink: 0;
  }
  .item-card {
    /*width: 100%;*/
  }
  .w-sm-100 {
    width: 100% !important;
  }
  .flex-grow-sm-0 {
    flex-grow: unset !important;
    width: 100% !important;
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
  .flex-grow-sm-0:last-child {
    margin-bottom: 0 !important;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .item-card-scrollable {
    width: 100%;
    flex-shrink: 0;
  }
  .item-card {
    /*width: 100%;*/
  }
  .w-sm-100 {
    width: 100% !important;
  }
  .flex-grow-sm-0 {
    flex-grow: unset !important;
    width: 100% !important;
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
  .flex-grow-sm-0:last-child {
    margin-bottom: 0 !important;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
