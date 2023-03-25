<template>
  <form class="default-form">
    <div :class="titleDetails.modeOfTextAlign">
      <p :class="titleDetails.modeOfTextAlign">{{ titleDetails.title }}</p>
    </div>

    <base-input
      v-for="input in inputDetails"
      :key="input"
      :id="input.id"
      :typeOfInput="input.typeOfInput"
      :name="input.name"
      :placeholder="input.placeholder"
      :mode="input.mode"
      :widthValue="input.widthValue"
      :icon="input.icon"
      :infoTopOfInput="input.infoTopOfInput"
      :alertBelowInput="input.alertBelowInput"
      :modeOfInfoTopOfInput="input.modeOfInfoTopOfInput"
      :modeOfAlertBelowInput="input.modeOfAlertBelowInput"
    >
    </base-input>

    <base-text-area :widthValue="100" placeholder="Mesajınızı Giriniz"> </base-text-area>

    <!-- textarea ve buton eklenecek, yukarıdaki alanda @input eklenecek bu sayede uyarı mesajı gösterilebilecek -->
  </form>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    inputDetails: {
      type: Array,
      required: true,
    },
    titleDetails: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.default-form {
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;
  color: red;
  /* color: var(--primary-blue); */
}
</style>
