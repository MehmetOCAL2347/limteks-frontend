<template>
    <button :id="id" :style="buttonStyle" v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link :id="id" v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: false
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        },
        mode: {
            type: String,
            required: false,
            default: null
        },
        widthValue: {
            type: Number,
            required: false,
            default: 100
        }
    },
    computed: {
        buttonStyle(){
            return { '--width-value': this.widthValue + '%' }
        }
    }

}
</script>

<style scoped>
a {
  margin-left:10px;
  margin-right: 10px;
  text-decoration: none;
  border-radius: 3px;
  padding: 10px;
  white-space:nowrap;
  text-align: center;
}

.a-base.router-link-active {  /** router-link-active demek aktif olan routerı bul ona göre butonlara işlem yaptır */
  /* background-color: var(--primary-white);
  color: var(--primary-blue); */
  transition: .4s ease-in-out;
  border: 2px solid var(--light-blue);
}

.a-base:hover,
button:hover{
  background-color: var(--primary-white);
  color: var(--primary-blue);
  transition: .4s ease-in-out;  
  cursor: pointer;  
}

.a-second:hover,
.a-second:active{
  transition: .2s ease-in-out;
  color: var(--text-hover);
}
button {
  border-radius: 30px;
  border: 1px solid var(--primary-blue);
  background-color: var(--primary-blue);
  padding: 0.6rem;
  width: var(--width-value);
  color: var(--primary-white);
}
.text-color-white {
  color: var(--primary-white);
}
.bold {
  font-weight: var(--font-weight-bolder);
  font-size: var(--font-size-large);
}

.mid{
  font-weight: var(--font-weight-bolder);
  font-size: var(--font-size-medium);
}
.light {
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-small);
}
</style>