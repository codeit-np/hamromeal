import axios from "axios";
import { defineStore } from "pinia";
export const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      categories: Array,
      loading: false,
    };
  },

  actions: {
    async loadCategories() {
      try {
        this.loading = true;
        var bhada = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (bhada.status == 200) {
          this.categories = bhada.data.categories;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
