<template>
  <div class="productItem">
    <img :src="srcValue" alt="product_logo" />
    <p>{{ productName.toUpperCase() }}</p>
    <p>{{ productPrice }} {{ priceType }}</p>
    <base-button :widthValue="80">{{ buttonText.toUpperCase() }}</base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceType: "₺",
      buttonText: "İncele",
    };
  },
  props: {
    productName: String,
    productPrice: String,
    srcValue: String,
  },
};
</script>

<style scoped>
.productItem {
  height: 400px;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bolder);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.productItem:hover {
  cursor: pointer;
  background-color: var(--secondary);
}

img {
  float: left;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 4px;
}
</style>
