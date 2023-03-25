<template>
  <div class="flex-row">
    <label :class="modeOfInfoTopOfInput" :for="id">{{ infoTopOfInput }}</label>
    <div class="relative">
      <font-awesome-icon :icon="icon" class="absolute" />
      <input
        class="input"
        :id="id"
        :name="name"
        :type="typeOfInput"
        :style="cssProps"
        :class="mode"
        :placeholder="placeholder"
        @input="update"
      />
      <div class="line"></div>
    </div>
    <!-- <p class="bsform-alert" v-if="alertUser"> -->
    <p :class="modeOfAlertBelowInput">
      {{ alertBelowInput }}
    </p>
  </div>
</template>

<script>
export default {
  emits: ["value"],
  props: {
    id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: false,
    },
    widthValue: {
      type: Number,
      required: false,
      default: 100,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    typeOfInput: {
      type: String,
      required: true,
      default: "text",
    },
    icon: {
      type: String,
      required: true,
    },
    infoTopOfInput: {
      type: String,
      required: true,
    },
    modeOfInfoTopOfInput: {
      type: String,
      required: true,
    },
    alertBelowInput: {
      type: String,
      required: true,
    },
    modeOfAlertBelowInput: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssProps() {
      return {
        "--width-value": this.widthValue + "%",
      };
    },
  },
  methods: {
    update(event) {
      const value = event.target.value.trim();
      this.$emit("value", value);
    },
  },
};
</script>
<style scoped>
.flex-row {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.relative {
  width: 100%;
  position: relative;
}
.absolute {
  position: absolute;
  top: 0.4rem;
  left: 0.5rem;
}
.input {
  width: var(--width-value);
  padding: 0.4rem;
  border: 0;
  border-bottom: 1px solid var(--primary-blue);
  outline: 0;
  padding-left: 30px;
}

.line {
  position: relative;
  width: 0;
  height: 1px;
  /* background: var(--primary-blue); */
  background: red;
  top: -0.1rem;
}

input:focus + .line {
  width: 100%;
  transition: width 0.5s ease-in-out;
  border: 0;
}
</style>
