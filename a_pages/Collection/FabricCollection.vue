<template>
    <!-- Üstte bir fotograf kategoriye ait konulabilir, Pagination ve solda filtreleme gerekebilir -->
    <div id="fabric">
      <div id="categoryImage">
      </div>
      <div id="productCollection">
        <ul class="ulItem">
          <li v-for="product in productList" :key="product.id">
            <product-card
              :productName="product.productName"
              :productPrice="product.productPrice"
              :srcValue="product.imageUrl"
            ></product-card>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div id="fabric">Kumas</div> -->
  </template>
  
  <script>
  export default {
    // category image dinamik hale getirmek lazım
    data() {
      return {
        productList: [
          {
            id: 0,
            imageUrl:
              "https://www.inegolmobilyabul.com/inegolmobilyasi/-nubuk-sagliktir--6a8649e.jpg",
            productName: "Nubuk Kumaş",
            productPrice: "90",
          },
          {
            id: 1,
            imageUrl:
              "https://kumasburada.com.tr/wp-content/uploads/2022/08/Kendinden-Desenli-Poplin-Kumas-1.jpeg",
            productName: "Poplin Kumaş",
            productPrice: "100",
          },
          {
            id: 2,
            imageUrl:
              "https://kardeslerkumas.com/wp-content/uploads/2022/08/Aerobin-Keten-Kumas-Pudra-Pembesi-1-1000x1000.jpeg",
            productName: "Keten Kumaş",
            productPrice: "190",
          },
          {
            id: 3,
            imageUrl:
              "https://st1.myideasoft.com/idea/br/50/myassets/products/404/sari-citir-cicekler-viskon-kumas.jpg?revision=1681139705",
            productName: "Viskon Kumaş",
            productPrice: "150",
          },
        ],
      };
    }
  };
  </script>
  
  <style scoped>
  #categoryImage {
    /* position: relative; */
    background: url("https://hthayat.haberturk.com/im/2019/10/15/ver1659214552/1072346_1920x1080.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    overflow: hidden;
  }
  
  #productCollection {
    max-width: 80%;
    margin: 0 auto;
    min-height: 80vh;
    padding: 20px;
  }
  
  .ulItem {
    max-width: 100%;
    margin: 0 auto;
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: 33% 33% 33%; /** auto auto yapmak 2 sütun anlamına gelir, auto auto auto yapsak 3 sütun olurdu  */
    gap: 20px;
  }
  </style>
  