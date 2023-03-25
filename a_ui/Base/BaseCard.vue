<template>
  <div class="card" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.card-small {
  width: 100%;
  min-height: 500px;
  margin: 20px auto;
}



.bs-card-xscard {
  width: 400px;
  min-height: 300px;
  margin: 20px auto;
}

.bs-card-mcard {
  width: 80%;
  margin: 20px auto;
}


@media (max-width: 620px) {
  .bs-card-mcard {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .bs-card-scard,
  .bs-card-xscard {
    width: 100%;
  }
}
</style>
