<template>
  <div>
    <div class=" lander-options">
      <ul class="d-flex justify-right-end">
        <!--delivery dropdown button-->
        <li class="mr-half">
          <dropdown-button
            :id="id"
            label="Delivery"
            classes="delivery"
            :ref="`dropdownButton${id}`"
            @toggle-dropdown="toggleDropdown"
          />
        </li>
        <!--start group order button-->
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
        <!--book a table button-->
        <li>
          <button class="transparent-btn">Book a table</button>
        </li>
      </ul>
    </div>
    <!--delivery dropdown content-->
    <dropdown
      label="Delivery"
      btn-classes="delivery"
      dropdown-classes="delivery-dropdown"
      :options="['Delivery', 'Pick up order']"
      adjust
      set-fixed
      ref="dropdownContent"
      content-only
      :ext-button-id="id"
      :fixed-width="fixedWidth"
      @on-close="$refs[`dropdownButton${id}`].toggleIcon()"
    >
      <template v-slot:option="{ item }">
        <span>{{ item }}</span>
      </template>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/shared/Dropdown";
import DropdownButton from "@/components/shared/DropdownButton";
import uniqueId from "lodash.uniqueid";
export default {
  name: "LanderOptions",
  components: { DropdownButton, Dropdown },
  computed: {
    id() {
      return `dropdown__button__${uniqueId()}`;
    }
  },
  data() {
    return {
      fixedWidth: 0
    };
  },
  mounted() {},
  methods: {
    toggleDropdown() {
      this.fixedWidth = this.$refs[`dropdownButton${this.id}`].$el.offsetWidth;
      this.$refs.dropdownContent.toggleDropdown();
    }
  }
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
.transparent-btn:hover {
  background-color: rgba(238, 236, 236, 0.3);
}
.lander-options {
  margin-bottom: 0.5rem;
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
  .lander-options {
    margin-bottom: 1rem;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  .lander-options {
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .lander-options ul li {
    margin-right: 0.8rem;
    flex: 0 0 auto;
  }
  .lander ul li:last-child {
    margin-right: 0;
  }

  .lander-options ul {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: unset;
  }
  .lander-options {
  }
  .transparent-btn {
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
