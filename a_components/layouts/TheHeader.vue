<template>
  <nav>
    <div id="navbar">
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
              mode="text-color-white a-base light"
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
                    link: '/productCollection'
                },
                {
                    id: 1,
                    name: 'Kampanyalar',
                    link: '/campaignDetails'
                },
                {
                    id: 2,
                    name: 'Katalog',
                    link: '/productCatalog'
                },
                {
                    id: 3,
                    name: 'İletişim',
                    link: '/companyCommunication'
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
  min-height: 80px;
  background-color:var(--main);
}

#logo {
  width: 80px;
  height: 80px;
}

#options-ul {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
}
</style>
