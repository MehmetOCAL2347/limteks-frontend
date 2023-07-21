<template>
  <!-- Üstte bir fotograf kategoriye ait konulabilir, Pagination ve solda filtreleme gerekebilir -->
  <div id="furniture">
    <div id="categoryImage">
      <!-- <img src="https://www.mobilyadiyari.com/oslo-koltuk-takimi-mobilya-diyari-630-19-B.jpg" alt="category_img"> -->
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
            "https://muzaffermobilya.com/wp-content/uploads/2022/03/urun-aura-koltuk-takimi-01.jpg",
          productName: "Retro Genç Odası",
          productPrice: "13,000",
          to: "/0",
        },
        {
          id: 1,
          imageUrl:
            "https://www.mobilyadiyari.com/arroda-koltuk-takimi-mobilya-diyari-2186-66-B.jpg",
          productName: "Retro Oturma Odası",
          productPrice: "15,000",
        },
        {
          id: 2,
          imageUrl:
            "https://www.berkemobilya.com.tr/media/catalog/product/cache/1/image/2000x1120/8cda07290adf5b61edee0d4066c5caef/m/r/mrr_2_.jpg",
          productName: "Retro Çalışma Odası",
          productPrice: "19,000",
        },
        {
          id: 3,
          imageUrl:
            "https://www.mobilyadiyari.com/oslo-koltuk-takimi-mobilya-diyari-630-19-B.jpg",
          productName: "Retro Çalışma Odası",
          productPrice: "19,000",
        },
      ],
    };
  },
};
</script>

<style scoped>
#categoryImage {
  /* position: relative; */
  background: url("https://statickelebek.mncdn.com/images/thumbs/0009274_martis-tekli-koltuk.jpeg")
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
