<template>
  <router-view/>
</template>

<script>
  import { mapState } from "vuex"
  export default {

   created(){
    this.$store.dispatch('loadProducts');
    this.$store.dispatch('loadBag');
   },
   computed: mapState([
    "productsInBag"
   ]),

  }
  
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(47, 62, 70);
  color: white;
}
</style>