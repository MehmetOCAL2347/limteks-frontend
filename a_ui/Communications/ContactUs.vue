<template>
  <!-- <div id="contactUs">
      <h4>{{ title }}</h4>
      <form ref="form" @submit.prevent="sendEmail" id="contact-form">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div> -->
  <base-card mode="card-small" id="contact">
    <base-form
      id="contact-Form"
      @submit.prevent="sendEmail"
      :titleDetails="titleDetails"
      :inputDetails="contactList"
    >
    </base-form>
  </base-card>
</template>

<script>
import emailjs from "@emailjs/browser";

const serviceID = "service_7lkthtc";
const templateID = "template_4b34ina";
const userID = "icsMqJO9PQDdq4nR_";

export default {
  data() {
    return {     

      serviceID: "service_7lkthtc",
      templateID: "template_4b34ina",
      userID: "icsMqJO9PQDdq4nR_",

      userEmail: "",

      alertUser: false,
      alertLoggedUser: false,



      titleDetails: {
        title: "Bize Ulaşın",
        modeOfTextAlign: "text-center",
        modeOfTextType: "text-bold"
      },

      contactList: [
        {
          id:"fullName",
          name:"fullName",
          mode:"",
          widthValue:100,
          typeOfInput: "text",
          placeholder:"İsim ve Soyisim Giriniz",
          icon: "fa-solid fa-user-tie",
          alertBelowInput: "Lütfen isminizi ve soyisminizi giriniz",
          infoTopOfInput: "İsim",
          modeOfInfoTopOfInput: "text-light",
          modeOfAlertBelowInput: "text-alert"
        },
        {
          id:"email",
          name:"email",
          mode:"",
          widthValue:100,
          typeOfInput: "email",
          placeholder:"Email Adresinizi Giriniz",
          icon: "fa-solid fa-envelope",
          alertBelowInput: "Lütfen email adresinizi giriniz",
          infoTopOfInput: "Email Adresi",
          modeOfInfoTopOfInput: "text-light",
          modeOfAlertBelowInput: "text-alert"
        }
      ]
    };
  },
  methods: {
    sendEmail() {
      emailjs.sendForm(serviceID, templateID, this.$refs.form, userID).then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    },
    updateUserId(value) {
      this.alertUser = false;
      this.alertLoggedUser = false;
      this.userEmail = value;
      if (this.userEmail === "") {
        this.alertUser = true;
      }
    },
  },
};
</script>

<style scoped>

</style>
