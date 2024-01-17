<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-img
          :src="productStore.product.strMealThumb"
          :lazy-src="productStore.product.strMealThumb"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="8">
        <h1>{{ productStore.product.strMeal }}</h1>
        <p>
          {{ productStore.product.strInstructions }}
        </p>

        <div class="py-5" v-if="productStore.product.strYoutube != ''">
          <h1 class="text-h5">Watch on YouTube</h1>
          <a :href="productStore.product.strYoutube" target="_blank">
            <v-icon icon="mdi-youtube" color="red" class="text-h3"></v-icon>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const route = useRoute();
import { useProductStore } from "~/store/product";
const productStore = useProductStore();
await productStore.loadSingleProduct(route.params.id);
</script>

<style lang="scss" scoped>
</style>