<template>
  <v-app>
    <nuxt-loading-indicator />
    <!-- Header -->
    <toolbar />
    <!-- Main -->
    <slot />
    <!-- Footer -->
    <v-footer color="blue">
      <v-container>
        <v-row>
          <v-col cols="4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            sed pariatur doloremque! Labore magnam commodi odio excepturi beatae
            maiores quidem aperiam veniam nihil perspiciatis, iusto voluptas quo
            cupiditate asperiores blanditiis.
          </v-col>
          <v-col cols="4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            consectetur perferendis labore quisquam adipisci vero sit commodi
            blanditiis facilis voluptatibus, reiciendis illum quam, inventore
            sunt, reprehenderit repellendus fuga hic! Voluptatum.
          </v-col>
          <v-col cols="4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quam delectus fugiat dolores dolor modi aspernatur repellat
            mollitia! In laborum voluptatibus eos itaque eveniet veniam
            pariatur? Voluptate enim nesciunt maiores!
          </v-col>
        </v-row>
        <v-row>
          <v-col> Develop by: Anish Babu </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useProductStore } from "~/store/product";
import { useCategoryStore } from "~/store/category";
const categoryStore = useCategoryStore();
const productStore = useProductStore();
await productStore.loadProduct();
await categoryStore.loadCategories();
</script>

<style lang="scss" scoped>
</style>