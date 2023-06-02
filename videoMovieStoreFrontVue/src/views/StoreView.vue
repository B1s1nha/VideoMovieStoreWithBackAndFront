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
              v-for="(product, index) in this.products"
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
  name: "StoreView",
  data() {
    return {};
  },
  components: {},
  computed: mapState(["products", "productsInBag"]),

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

<style lang="scss">
.btn-light,
.btn-light:hover,
.btn-light:focus {
  color: #333;
  text-shadow: none;
}

body {
  text-shadow: 0 0.05rem 0.1rem rgba(47, 62, 70, 0.5);
  box-shadow: inset 0 0 5rem rgba(47, 62, 70, 0.5);
}

.cover-container {
  max-width: 420em;
}

.nav-masthead .nav-link {
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

.p-3 {
  padding: 6rem !important;
}
* {
  box-sizing: border-box;
}
.text-bg-dark {
  color: #fff !important;
  background-color: RGBA(82, 121, 111, var(--bs-bg-opacity, 1)) !important;
}
p {
  margin-top: 0;
  margin-bottom: 2rem;
}
.btn-group-lg > .btn,
.btn-lg {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1.5rem;
  --bs-btn-font-size: 1.25rem;
  --bs-btn-border-radius: var(--bs-border-radius-lg);
}

//
a {
  color: white;
  text-decoration: none;

  &.router-link-exact-active {
    color: rgb(202, 210, 197);
  }
}
.home {
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product {
      flex: 0 0 30%;
      box-sizing: border-box;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      margin: 40px;
      height: 530px;

      @media only screen and (max-width: 769px) {
        flex: 0 0 40%;
      }

      @media only screen and (max-width: 640px) {
        flex: 0 0 90%;
      }

      &.inBag {
        border: 1px solid rgb(202, 210, 197);
      }

      .product-image {
        margin: 20px auto;
        width: 160px;
        height: 230px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      h4 {
        margin: 22px auto;
        font-size: 12px;
        max-width: 100%;
        font-weight: normal;
      }

      p.price {
        font-size: 20px;
        font-weight: bold;
      }

      button {
        color: #fff;
        background-color: rgb(132, 169, 140);
        border: 1px solid rgb(132, 169, 140);
        border-radius: 0.375rem;
        font-weight: 400;
        text-align: center;
        padding: 8px 16px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        &.remove {
          background-color: transparent;
          border: none;
          color: black;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
