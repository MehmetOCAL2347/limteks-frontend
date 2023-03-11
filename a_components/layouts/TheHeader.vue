<template>
  <nav>
    <div id="navbar">
      <!-- <div id="logoContainer">
        <img id="logo" src="../../src/assets/logo_new.jpg" alt="limteks_logo">
    </div> -->
      <!-- <div>
        <base-button :link="true" mode="text-color-white a-base">1</base-button>
      </div>
      <div>
        <base-button :link="true" mode="text-color-white a-base">2</base-button>
      </div>
      <div>
        <base-button :link="true" mode="text-color-white a-base">3</base-button>
      </div> -->
      <div id="options">
        <ul id="options-ul">
          <li>
            <img
              id="logo"
              src="../../src/assets/logo_2.png"
              alt="limteks_logo"
            />
          </li>
          <li v-for="option in options" :key="option.id">
            <base-button
              :to="option.link"
              :link="true"
              mode="text-color-white a-base"
              >{{ option.name }}</base-button
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="js">
export default {
    data(){
        return {
            options: [  /** DB'den alabiliriz */
                {
                    id: 0,
                    name: 'Koleksiyon',
                    link: '/'
                },
                {
                    id: 1,
                    name: 'Kampanyalar',
                    link: '/'
                },
                {
                    id: 2,
                    name: 'Katalog',
                    link: '/'
                },
                {
                    id: 3,
                    name: 'İletişim',
                    link: '/'
                }
            ]
        }
    }

}
</script>

<style scoped>
#navbar {
  margin: 0;
  width: 100%;
  min-height: 100px;
  background-color:var(--main);
  /**#F9D51D ->sarı
  #323033-> gri */
}

#logo {
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
}

#options-ul {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
}
</style>
