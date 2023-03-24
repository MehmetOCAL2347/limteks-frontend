<template>
  <div id="communications">
    <contact-info
      :title="arrayOfTitles.titleInfoContact"
      :arrayOfContact="arrayOfContact"
      :arrayOfSocialMedia="arrayOfSocialMedia"
    ></contact-info>
    <contact-us
      :title="arrayOfTitles.titleSendEmail"
    ></contact-us>    
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
      arrayOfContact: [
        {
          explanation:
            "Organize Sanayi Bölgesi 24. Cad. No:23 Kayseri - TÜRKİYE",
          mode: "fa-solid fa-location-dot",
        },
        {
          explanation: "+90 541 553 49 62",
          mode: "fa-solid fa-phone",
        },
        {
          explanation: "limteksgroup@gmail.com",
          mode: "fa-solid fa-envelope",
        },
      ],
      arrayOfSocialMedia: [
        {
          explanation: "Instagramdan bizi takip edin",
          mode: "fa-brands fa-square-instagram",
          href: "https://www.instagram.com/limteksgrupfurniture/",
        },
      ],
    };
  },
};
</script>

<style scoped>
#communications {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
