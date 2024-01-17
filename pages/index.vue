<template>
  <div>
    <v-container>
      <v-select
        v-model="selectedProduct"
        label="Select Meal Category"
        :items="categoryStore.categories.map((e) => e.strCategory)"
        variant="outlined"
        @update:modelValue="productStore.loadSingleProduct(selectedProduct)"
      ></v-select>

      <div v-if="productStore.loading">
        <v-progress-linear indeterminate />
      </div>
      <v-row v-else>
        <v-col
          v-for="product in productStore.products"
          :key="product"
          class="d-flex child-flex"
          cols="4"
        >
          <product :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useProductStore } from "~/store/product";
import { useCategoryStore } from "~/store/category";

const productStore = useProductStore();
const categoryStore = useCategoryStore();

const selectedProduct = ref("Seafood");
</script>

<style lang="scss" scoped>
</style>