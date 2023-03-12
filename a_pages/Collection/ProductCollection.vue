<template>
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
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          id: 0,
          imageUrl: "https://muzaffermobilya.com/wp-content/uploads/2022/03/urun-aura-koltuk-takimi-01.jpg",
          productName: "Retro Genç Odası",
          productPrice: "13,000",
        },
        {
          id: 1,
          imageUrl: "https://www.mobilyadiyari.com/arroda-koltuk-takimi-mobilya-diyari-2186-66-B.jpg",
          productName: "Retro Oturma Odası",
          productPrice: "15,000",
        },
        {
          id: 2,
          imageUrl: "https://www.berkemobilya.com.tr/media/catalog/product/cache/1/image/2000x1120/8cda07290adf5b61edee0d4066c5caef/m/r/mrr_2_.jpg",
          productName: "Retro Çalışma Odası",
          productPrice: "19,000",
        },
        {
          id: 3,
          imageUrl: "https://www.mobilyadiyari.com/oslo-koltuk-takimi-mobilya-diyari-630-19-B.jpg",
          productName: "Retro Çalışma Odası",
          productPrice: "19,000",
        },
      ],
    };
  },
};
</script>

<style scoped>
#productCollection {
  background-color: red;
  width: 80%;
  margin: 0 auto;
  min-height: 80vh;
  padding: 20px;
}

.ulItem {
  padding: 0;
  display: grid;
  grid-template-columns: auto auto; /** auto auto yapmak 2 sütun anlamına gelir, auto auto auto yapsak 3 sütun olurdu  */
  gap: 20px;
}

.ulItem li {
  /* grid-column-start: 1;
  grid-column-end: 2; */
}
</style>
