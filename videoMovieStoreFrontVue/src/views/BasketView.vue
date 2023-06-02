<template>
  <div class="basket" style="box-shadow: inset 0 0 0rem rgba(47, 62, 70,);">
    <div id="nav">
      <router-link to="/store">Back to store</router-link> -
      <router-link to="/Basket"
        >Cart ({{ this.productsInBag.length }})</router-link
      >
    </div>
    <div class="items">
      <template v-if="productsInBag.length">
        <div
          v-for="(product, index) in productsInBag"
          :key="index"
          class="item"
        >
          <div
            class="remove"
            @click="this.$store.dispatch('removeFromBag', product.id)"
          >
            Remove Product
          </div>
          <div class="photo"><img :src="product.image" alt="" /></div>
          <div class="description">{{ product.title }}
          <div style="font-size: small; padding-top: 10%;">{{ product.description }}</div>
          </div>
          <div class="price">
            <span class="quantity-area">
              <button
                :disabled="product.quantity <= 1"
                @click="product.quantity = product.quantity - 1"
              >
                -
              </button>
              <span class="quantity">{{ product.quantity }}</span>
              <button @click="product.quantity = product.quantity + 1">
                +
              </button>
            </span>
            <span class="amount">
              US$ {{ (product.price * product.quantity).toFixed(2) }}</span
            >
          </div>
        </div>
        <div class="grand-total">Total: US$ {{ orderTotal() }}</div>
      </template>
      <template v-else>
        <h4 style="padding-top: 30%;padding-bottom: 32.5%;">You didn't add any product</h4>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BasketView",

  methods: {
    orderTotal() {
      var total = 0;
      this.productsInBag.forEach((item) => {
        total = total + item.price * item.quantity;
      });
      return total.toFixed(2);
    },
  },

  computed: mapState(["productsInBag"]),
};
</script>

<style lang="scss">
.basket {
  padding: 60px 0;
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {
          margin: 0 10px;
        }
      }

      .photo {
        img {
          max-width: 125px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;
      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;
        }
      }
    }
    .grand-total {
      font-size: 24px;
      font-weight: bold;
      text-align: right;
      margin-top: 8px;
    }
  }
}
</style>
