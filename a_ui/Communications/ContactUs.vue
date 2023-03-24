<template>
    <div id="contactUs">
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
    </div>
</template>

<script>
import emailjs from "@emailjs/browser";

const serviceID = "service_7lkthtc";
const templateID = "template_4b34ina";
const userID = "icsMqJO9PQDdq4nR_";

export default {
    props: ["title"],
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
  },
}
</script>

<style scoped>
#contactUs {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#contact-form input,
textarea {
  width: 80%;
}
</style>
