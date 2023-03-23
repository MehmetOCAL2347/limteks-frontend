<template>
  <div id="communications">
    <div id="Info">
      <ul>
        <li>
          <h4>{{ arrayOfTitles.titleInfoContact }}</h4>
        </li>
        
      </ul>
    </div>
    <div id="contactUs">
      <ul>
        <li>
          <h4>{{ arrayOfTitles.titleSendEmail }}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrayOfTitles: {
        titleInfoContact: "İletişim",
        titleSendEmail: "Bize Ulaşın",
      },
    };
  },
};
</script>

<style scoped>
#communications {
  background-color: red;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
