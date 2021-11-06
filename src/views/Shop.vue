<template>
  <div class="shop">
    <div class="products-with-image">
      <div
        class="product-with-image"
        v-for="product in $root.$data.products_with_images"
        :key="product.name"
      >
        <div class="one-col">
          <p class="shop-item title">
            {{ product.name }}&emsp;{{ product.price }}
          </p>
          <button
            class="shop-item link"
            v-on:click="set_selected_product(product)"
          >
            Schedule Appointment
          </button>
          <div class="image_title_set">
            <img v-bind:src="product.image_before" alt="" />
            <p class="image_description">Before</p>
          </div>
          <div class="image_title_set">
            <img v-bind:src="product.image_after" />
            <p class="image_description">After</p>
          </div>
        </div>
        <hr class="shop-divider" />
      </div>
    </div>
    <p class="shop-item title">Other</p>
    <div class="products-no-image">
      <div
        class="product-no-image"
        v-for="product in $root.$data.products_no_images"
        :key="product.name"
      >
        <div class="one-col">
          <p class="shop-item other title">
            {{ product.name }}&emsp;{{ product.price }}
          </p>
          <button
            class="shop-item link"
            v-on:click="set_selected_product(product)"
          >
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  methods: {
    set_selected_product(product) {
      console.log(product);
      this.$root.$data.selected_product = product;
      this.$router.push("/schedule");
    },
  },
};
</script>

<style>
.shop-item {
  font-weight: bold;
  font-size: 1.5em;
  margin-left: 10px;
  margin-top: 30px;
}

.link {
  margin-top: 10px;
  margin-bottom: 10px;
}

.other {
  margin-top: 10px;
}

.shop-divider {
  margin-top: 20px;
}
</style>
