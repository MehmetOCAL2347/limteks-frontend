<template>
  <div>
    <textarea
      class="textArea"
      :name="name"
      :class="mode"
      :placeholder="placeholder"
      :style="cssProps"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    widthValue: {
      type: Number,
      required: false,
      default: 100,
    },
  },

  computed: {
    cssProps() {
      return {
        "--width-value": this.widthValue + "%",
      };
    },
  },
};
</script>

<style scoped>
.textArea {
  min-height: 100px;
  width: var(--width-value);
  margin-top: 30px;
  resize: none;
  padding: 0.4rem;
  border: 0;
  border-bottom: 0.1px solid black;
  outline: 0;
}
</style>
