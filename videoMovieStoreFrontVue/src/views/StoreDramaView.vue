<template>
  <div>
    <body class="d-flex h-100 text-center text-bg-dark">
      <div id="nav">
        <router-link to="/store/romance"> Romance </router-link> -
        <router-link to="/store/horror"> Horror </router-link> -
        <router-link to="/store/animation"> Animation </router-link> -
        <router-link to="/store/fantasy"> Fantasy </router-link> -
        <router-link to="/store/thriller"> Thriller </router-link> -
        <router-link to="/store/sci-fi"> Sci-Fi </router-link> -
        <router-link to="/store/action"> Action </router-link> -
        <router-link to="/store/crime"> Crime </router-link> -
        <router-link to="/store/drama"> Drama </router-link> -
        <router-link to="/store"> Geral </router-link> -
        <router-link to="/Basket"
          >Cart ({{ productsInBag.length }})</router-link
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
              v-for="(product, index) in dramaMovies"
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
              <!-- <button @click="atualizarProduto">Atualizar Produto</button> -->
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapState } from "vuex";
export default {
  name: "StoreDramaView",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["products", "productsInBag"]),
    dramaMovies() {
      return this.products.filter((movie) => movie.category === "drama");
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
