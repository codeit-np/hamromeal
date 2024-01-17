<template>
  <div>
    <h1>About Page</h1>
    {{ productStore.products }}
  </div>
</template>

<script setup>
import { useProductStore } from "~/store/product";
const productStore = useProductStore();
</script>

<style lang="scss" scoped>
</style>