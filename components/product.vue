<template>
  <v-img
    :src="product.strMealThumb"
    :lazy-src="product.strMealThumb"
    aspect-ratio="16/9"
    cover
    class="bg-grey-lighten-2"
    @click="$router.push(`/meal/${product.idMeal}`)"
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
</template>

<script setup>
defineProps({
  product: {},
});
</script>

<style lang="scss" scoped>
</style>