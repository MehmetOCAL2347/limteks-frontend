<template>
  <div id="footer">
    <div class="row-limteks">
      <!-- <div>
        
      </div> -->
      <div>
        <ul>
          <li>
            <h2>{{ arrayOfTitles.aboutUs }}</h2>
          </li>
          <li>
            <p>
              <font-awesome-icon
                :icon="arrayOfAdress[0].mode"
                class="footer-icon"
              />
              {{ arrayOfAdress[0].explanation }}
            </p>
          </li>
          <li>
            <a :href="arrayOfAdress[1].href">
              <font-awesome-icon
                :icon="arrayOfAdress[1].mode"
                class="footer-icon"
              />
              {{ arrayOfAdress[1].explanation }}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <h2>{{ arrayOfTitles.socialMedia }}</h2>
          </li>

          <li v-for="social in arrayOfsocialMedia" :key="social">
            <a target="_blank" :href="social.href">
              <font-awesome-icon :icon="social.mode" class="footer-icon" />
              {{ social.explanation }}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <h2>{{ arrayOfTitles.corporate }}</h2>
          </li>

          <li v-for="corporate in arrayOfCorporate" :key="corporate">
            <base-button :link="true" :to="corporate.to" class="no-padding">{{ corporate.explanation }}</base-button>
        </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h2>{{ arrayOfTitles.workingDays }}</h2>
          </li>
        </ul>
      </div>
    </div>

    <div class="center">
      <p>
        {{ companyName }} &copy;{{ arrayOfCopyright.explanation_1 }}
        <a target="_blank" :href="arrayOfCopyright.href">
          {{ arrayOfCopyright.explanation_2 }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: "Limteks Grup",
      arrayOfTitles: {
        aboutUs: "Adres",
        socialMedia: "Sosyal Medya",
        corporate: "Kurumsal",
        workingDays: "Çalışma Saatleri",
      },
      arrayOfsocialMedia: [
        {
          explanation: "Linkedin | Limteks Grup",
          mode: "fa-brands fa-linkedin",
          href: "https://www.linkedin.com/in/h%C3%BCseyin-%C3%A7eltik-363691234/?originalSubdomain=tr",
        },
        {
          explanation: "Instagram | limteksgrupfurniture",
          mode: "fa-brands fa-square-instagram",
          href: "https://www.instagram.com/limteksgrupfurniture/",
        },
        {
          explanation: "Facebook | Limteks Tekstil Mobilya",
          mode: "fa-brands fa-square-facebook",
          href: "https://www.facebook.com/people/Limteks-Tekstil-Mobilya/100080333300081/?paipv=0&eav=AfalRmywQI9U5W7mjCvBFOlEcWT0_czo9UaZuEEup21E1nLER9GDtDlFncD5KNEoank&_rdr",
        },
        {
          explanation: "limteksgroup@gmail.com",
          mode: "fa-solid fa-envelope",
          href: "mailto:limteksgroup@gmail.com",
        },
        {
          explanation: "+90 541 553 49 62",
          mode: "fa-solid fa-phone",
          href: null,
        },
      ],

      arrayOfAdress: [
        {
          explanation: "Organize Sanayi Bölgesi 24. Cad. No:23",
          href: null,
        },
        {
          explanation: "Kayseri / Türkiye",
          href: null,
        },
      ],
      arrayOfCopyright: {
        explanation_1: "Copyright 2023, Powered by",
        explanation_2: "Mehmet ÖCAL",
        href: "https://mehmetocal.netlify.app/",
      },
      arrayOfCorporate: [
        // Kurumsal
        {
          explanation: "Hakkımızda",
          to: "/hakkimizda"
        },
      ],
    };
  },
};
</script>

<style scoped>
#footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-height: 300px;
  background-color: var(--dark-blue);
  color: var(--primary-white);
}
a {
  color: var(--primary-white);
}

a:hover {
  color: var(--text-hover);
}

.row-limteks {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.center {
  text-align: center;
}

.footer-icon {
  width: 20px;
  height: 20px;
}

li {
  padding-bottom: 10px;
}
p {
  margin: 0;
}

.no-padding{
    padding: 5px !important;
    margin: 0 !important;
}

@media (max-width: 440px) {
  .row-limteks {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }
  .row-limteks ul {
    padding-left: 0;
  }
}
</style>
