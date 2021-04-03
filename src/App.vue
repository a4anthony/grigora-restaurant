<template>
  <div>
    <navigation-bar />
    <lander />
  </div>
</template>

<script>
import NavigationBar from "@/components/layout/NavigationBar";
import Lander from "@/components/Lander";
export default {
  name: "App",
  components: {
    Lander,
    NavigationBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
