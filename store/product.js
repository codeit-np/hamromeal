import axios from "axios";
import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => {
    return {
      products: null,
      product: null,
      loading: false,
    };
  },

  actions: {
    async loadProduct() {
      try {
        this.loading = true;
        var bhada = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        if (bhada.status == 200) {
          this.products = bhada.data.meals;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    async loadSingleProduct(id) {
      try {
        this.loading = true;
        var bhada = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (bhada.status == 200) {
          this.product = bhada.data.meals[0];
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
