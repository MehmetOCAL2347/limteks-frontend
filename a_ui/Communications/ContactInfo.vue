<template>
  <div id="contact">
    <ul>
      <li>
        <h4>{{ title }}</h4>
      </li>
      <li v-for="contact in arrayOfContact" :key="contact">
        <p>
          <font-awesome-icon :icon="contact.mode" class="contact-icon" />
          {{ contact.explanation }}
        </p>
      </li>
      <li v-for="socialMedia in arrayOfSocialMedia" :key="socialMedia">
        <a :href="socialMedia.href" target="_blank">
          <font-awesome-icon :icon="socialMedia.mode" class="contact-icon" />
          {{ socialMedia.explanation }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["title", "arrayOfContact", "arrayOfSocialMedia"],
};
</script>

<style scoped>
#contact{
    width: 100%;
}

.contact-icon{
    width: 20px;
    height: 20px;
}

</style>
