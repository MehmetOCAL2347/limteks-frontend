<template>
  <div id="app-body">
    <div>
      <the-header></the-header>
    </div>
    <div>
      <the-main></the-main>
    </div>
    <div>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheHeader from "../a_components/layouts/TheHeader.vue";
import TheMain from "../a_components/layouts/TheMain.vue";
import TheFooter from "../a_components/layouts/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

#app-body{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
