<template>
  <div id="app-body">
    <div id="the-header">
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
/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Ubuntu:wght@300&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Ubuntu", sans-serif !important;
  min-height: 100%;
}

body {
  margin: 0;
}
#app-body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#the-header {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

:root {
  /* color */
  --main: #000c66;
  --secondary: #f9d51d;

  --primary-blue: #000c66;
  --light-blue: #1974d2;
  --dark-blue: #050a30;

  --primary-white: white;
  --primary-alert-red: red;
  --text-hover: #ef4035;

  /** font */
  --font-size-large: 28px;
  --font-size-medium: 20px;
  --font-size-small: 14px;
  --font-size-xSmall: 11px;

  --font-weight-bolder: bolder;
  --font-weight-light: light;
  --font-weighy-lighter: 200;
}

.text-center {
  text-align: center;
}

.text-bold {
  font-weight: var(--font-weight-bolder);
  font-size: var(--font-size-large);
}

.text-light {
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-small);
}

.text-alert {
  font-size: var(--font-size-xSmall);
  color: var(--primary-alert-red);
}

</style>
