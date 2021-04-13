<template>
  <div
    class="side-drawer"
    :class="[
      isOpen === true ? 'slide-in' : '',
      isOpen === false ? 'slide-out' : '',
      classes
    ]"
  >
    <!--close button-->
    <div class="d-flex justify-right-end close-side-drawer">
      <button
        @click="$emit('toggle-side-drawer')"
        class="close-side-drawer-btn d-flex justify-center items-center "
      >
        &times;
      </button>
    </div>
    <!--side drawer content -->
    <div class="side-drawer-content">
      <ul>
        <li v-for="(link, index) in links" :key="`link${index}`">
          <a
            @click="onLinkClick(index)"
            :href="link.href"
            :class="link.classes"
          >
            <span class="mr-2">
              <inline-svg
                :size="link.classes.includes('small-link') ? 16 : 25"
                :path="link.iconPath"
            /></span>
            {{ link.text }}
            <click-animation
              :background-color="
                link.classes.includes('small-link') ? '#51307c' : ''
              "
              :ref="`showClickAnimation${index}`"
            />
          </a>
          <div
            class="line-space"
            v-if="index === 0 || index === links.length - 3"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickAnimation from "@/components/shared/ClickAnimation";
export default {
  name: "SideDrawer",
  components: { ClickAnimation },
  props: {
    isOpen: {
      type: Boolean,
      default: null
    },
    classes: {
      type: String,
      default: ""
    }
  },
  watch: {
    isOpen: {
      handler(val) {
        this.$store.commit("setSideDrawerStatus", val);
        if (val) {
          this.bodyScroll(false);
        } else {
          this.bodyScroll(true);
        }
      }
    }
  },
  data() {
    return {
      showClickAnimation: false,
      links: [
        {
          text: "Sign In/Sign Up",
          href: "#",
          iconPath: require(`!html-loader!../../assets/svgs/user-profile.svg`),
          classes: "large-link auth"
        },
        {
          text: "Home",
          href: "#",
          iconPath: require(`!html-loader!../../assets/svgs/home.svg`),
          classes: "large-link home"
        },
        {
          text: "About Grigora",
          href: "#",
          iconPath: require(`!html-loader!../../assets/svgs/exclamation.svg`),
          classes: "large-link about"
        },
        {
          text: "Help & Support",
          href: "#",
          iconPath: require(`!html-loader!../../assets/svgs/question.svg`),
          classes: "large-link help"
        },
        {
          text: "Partner with us",
          href: "#",
          iconPath: require(`!html-loader!../../assets/svgs/briefcase.svg`),
          classes: "large-link"
        },
        {
          text: "+234 901 066 9160",
          href: "tel:+2349010669160",
          iconPath: require(`!html-loader!../../assets/svgs/phone.svg`),
          classes: "small-link"
        },
        {
          text: "hello@grigora.ng",
          href: `mailto:hello@grigora.ng`,
          iconPath: require(`!html-loader!../../assets/svgs/envelope.svg`),
          classes: "small-link"
        }
      ]
    };
  },
  methods: {
    bodyScroll(bool) {
      const $body = document.querySelector("body");
      let scrollPosition = window.pageYOffset;
      if (!bool) {
        scrollPosition = window.pageYOffset;
        $body.style.overflow = "hidden";
        $body.style.position = "fixed";
        $body.style.top = `-${scrollPosition}px`;
        $body.style.width = "100%";
      } else {
        const scrollY = $body.style.top;
        $body.style.removeProperty("overflow");
        $body.style.removeProperty("position");
        $body.style.removeProperty("top");
        $body.style.removeProperty("width");
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    },
    onLinkClick(index) {
      this.$refs[`showClickAnimation${index}`].toggleAnimation();
    }
  }
};
</script>

<style scoped>
.side-drawer-content {
  padding: 0 25px;
}
.line-space {
  border-bottom: 1px solid #e5e3e3;
  height: 1px;
  margin-top: 0.5rem;
}
.side-drawer ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.side-drawer ul li {
  margin-bottom: 0.5rem;
}
.side-drawer a {
  min-height: 48px;
  color: inherit;
  transition: color 0.3s, background-color 0.3s;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
}

.side-drawer a.large-link {
  background-color: #fff;
  padding: 20px;
  border-radius: 60px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #212121;
}
.side-drawer a.large-link:hover {
  background-color: #e5e4e4;
}
.side-drawer a.large-link.home:hover {
  background-color: #f8e1e1;
}
.side-drawer a.small-link {
  background-color: #fff;
  min-height: 48px;
  padding: 8px 16px;
  border-radius: 0;
  font-size: 0.9rem;
  color: #616161;
  font-weight: 700;
}
.side-drawer a.small-link:hover {
  background-color: #e3d2fa;
}
.side-drawer {
  background: white;
  position: fixed;
  width: 80%;
  top: 0;
  right: -2000px;
  bottom: 0;
  z-index: 100000000;
}
.close-side-drawer {
  margin: 15px;
}
.close-side-drawer-btn {
  font-size: 40px;
  color: #999;
  background-color: #fff;
  width: 50px;
  height: 50px;
  padding: 0;
  border-radius: 50%;
}
.close-side-drawer button:hover {
  background-color: #e5e4e4;
}
.slide-in {
  -webkit-animation: slide-in 0.5s forwards;
  animation: slide-in 0.5s forwards;
}
.slide-out {
  -webkit-animation: slide-out 0.5s forwards;
  animation: slide-out 0.5s forwards;
}
@keyframes slide-in {
  0% {
    z-index: 100000000;
    right: -2000px;
  }
  100% {
    right: 0;
    width: 30%;
    z-index: 100000000;
  }
}
@-webkit-keyframes slide-in {
  0% {
    z-index: 100000000;
    right: -2000px;
  }
  100% {
    right: 0;
    width: 30%;
    z-index: 100000000;
  }
}
@keyframes slide-out {
  0% {
    right: 0;
    width: 30%;
    z-index: 100000000;
  }
  100% {
    right: -2000px;
    width: 30%;
    z-index: 100000000;
  }
}
@-webkit-keyframes slide-out {
  0% {
    right: 0;
    width: 30%;
    z-index: 100000000;
  }
  100% {
    right: -2000px;
    width: 30%;
    z-index: 100000000;
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
  @keyframes slide-in {
    0% {
      z-index: 100000000;
      right: -2000px;
    }
    100% {
      right: 0;
      width: 40%;
      z-index: 100000000;
    }
  }
  @-webkit-keyframes slide-in {
    0% {
      z-index: 100000000;
      right: -2000px;
    }
    100% {
      right: 0;
      width: 40%;
      z-index: 100000000;
    }
  }
  @keyframes slide-out {
    0% {
      right: 0;
      width: 40%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 40%;
      z-index: 100000000;
    }
  }
  @-webkit-keyframes slide-out {
    0% {
      right: 0;
      width: 40%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 40%;
      z-index: 100000000;
    }
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  @keyframes slide-in {
    0% {
      z-index: 100000000;
      right: -2000px;
    }
    100% {
      right: 0;
      width: 70%;
      z-index: 100000000;
    }
  }
  @-webkit-keyframes slide-in {
    0% {
      z-index: 100000000;
      right: -2000px;
    }
    100% {
      right: 0;
      width: 70%;
      z-index: 100000000;
    }
  }
  @keyframes slide-out {
    0% {
      right: 0;
      width: 70%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 70%;
      z-index: 100000000;
    }
  }
  @-webkit-keyframes slide-out {
    0% {
      right: 0;
      width: 70%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 70%;
      z-index: 100000000;
    }
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  @keyframes slide-in {
    0% {
      z-index: 100000000;
      right: -2000px;
    }
    100% {
      right: 0;
      width: 95%;
      z-index: 100000000;
    }
  }
  @-webkit-keyframes slide-in {
    0% {
      z-index: 100000000;
      right: -2000px;
    }
    100% {
      right: 0;
      width: 95%;
      z-index: 100000000;
    }
  }
  @keyframes slide-out {
    0% {
      right: 0;
      width: 95%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 95%;
      z-index: 100000000;
    }
  }
  @-webkit-keyframes slide-out {
    0% {
      right: 0;
      width: 95%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 95%;
      z-index: 100000000;
    }
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
