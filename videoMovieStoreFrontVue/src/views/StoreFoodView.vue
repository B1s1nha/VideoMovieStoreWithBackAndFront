<template>
  <div>
    <body class="d-flex h-100 text-center text-bg-dark"  style="background-image: url('https://i.imgur.com/juYeoYV.gif'); background-position: 50%; background-attachment: fixed; background-size: 10%;">
      <div id="nav">
        <router-link to="/store/food"> <a style="color: rgb(55, 147, 110) ;">food</a> </router-link> -
        <router-link to="/store/romance"> romance </router-link> -
        <router-link to="/store/horror"> horror </router-link> -
        <router-link to="/store/animation"> animation </router-link> -
        <router-link to="/store/fantasy"> fantasy </router-link> -
        <router-link to="/store/thriller"> thriller </router-link> -
        <router-link to="/store/sci-fi"> sci-fi </router-link> -
        <router-link to="/store/action"> action </router-link> -
        <router-link to="/store/crime"> crime </router-link> -
        <router-link to="/store/drama"> drama </router-link> -
        <router-link to="/store"> geral </router-link> -
        <router-link to="/Basket"
          >cart ({{ productsInBag.length }})</router-link
        >
      </div>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <h3 class="float-md-start mb-0">VideoStore</h3>
            <router-link to="/"
              ><nav
                class="nav nav-masthead justify-content-center float-md-end"
              >
                <a class="nav-link fw-bold py-1 px-0" href="#"
                  ><a style="opacity: 0">a</a>Home<a style="opacity: 0">a</a></a
                >
              </nav>
            </router-link>
            <router-link to="/about"
              ><nav
                class="nav nav-masthead justify-content-center float-md-end"
              >
                <a class="nav-link fw-bold py-1 px-0" href="#"
                  ><a style="opacity: 0">a</a>About us
                  <a style="opacity: 0">a</a></a
                >
              </nav>
            </router-link>
            <nav class="nav nav-masthead justify-content-center float-md-end">
              <a
                class="nav-link fw-bold py-1 px-0 active"
                aria-current="page"
                href="#"
                ><a style="opacity: 0">a</a>Shop<a style="opacity: 0">a</a></a
              >
            </nav>
          </div>
        </header>
        <div class="home">
          <div class="products">
            <div
              v-for="(product, index) in food"
              :key="index"
              class="product"
              :class="{ inBag: isInBag(product) }"
            >
              <div
                class="product-image"
                :style="{ backgroundImage: 'url(' + product.image + ')' }"
              ></div>
              <h4 class="comment">{{ product.title }}</h4>
              <h4>{{ product.description }}</h4>
              <p class="price">US$ {{ product.price.toFixed(2) }}</p>
              <button v-if="!isInBag(product)" @click="addToBag(product)">
                Add to Cart
              </button>
              <button
                v-else
                class="remove"
                @click="this.$store.dispatch('removeFromBag', product.id)"
              >
                Remove
              </button>
              
            </div>
            <h4 style="padding-top: 30%;padding-bottom: 32.5%;border: 3px solid #fff; background-color: rgb(55, 147, 110)"><a class="invisible">-----</a>Wait for the news in our Instagram :)<a class="invisible">-----</a></h4>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  name: "StoreFoodView",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["products", "productsInBag"]),
    food() {
      return this.$store.state.food;
    },
  },
  methods: {
    addToBag(product) {
      product.quantity = 1;
      this.$store.dispatch("addToBag", product);
    },
    isInBag(product) {
      return this.productsInBag.find((item) => item.id == product.id);
    },
  },
};
</script>

<style>
.invisible{
  opacity: 0%;
}
</style>