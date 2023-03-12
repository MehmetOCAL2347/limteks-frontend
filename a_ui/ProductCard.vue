<template>
  <div class="productItem">
    <img :src="srcValue" alt="product_logo" />
    <p>{{ productName }}</p>
    <p>{{ productPrice }}</p>
    <base-button>İncele</base-button>
  </div>
</template>

<script>
export default {
    props:{
        productName: String,
        productPrice: String,
        srcValue: String
    }
};
</script>

<style scoped>
.productItem{
    min-height: 300px;
    width: 100%;
    border: 1px solid black;
    padding: 10px;
}

img{
    /* max-width: 100%;
    margin: 0 auto; */
    float: left;
    width: 100%;
    height: 50vh;
    object-fit: cover;
}
</style>
