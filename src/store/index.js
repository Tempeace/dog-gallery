import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const FAVORITES_KEY = "FAVORITES";

Vue.use(Vuex);

const storedFavorites = localStorage.getItem(FAVORITES_KEY);

export default new Vuex.Store({
  state: {
    favoriteDogs: JSON.parse(storedFavorites) || [],
  },
  mutations: {},
  actions: {
    GET_DOGS() {
      return axios.get("https://dog.ceo/api/breeds/image/random/20");
    },
    GET_ALL_BREEDS() {
      return axios.get("https://dog.ceo/api/breeds/list/all");
    },
    GET_DOGS_BY_BREED(_, breed) {
      const breedFamily = breed.split("-")[0];
      const subBreed = breed.split("-")[1];
      if (subBreed) {
        return axios.get(
          `https://dog.ceo/api/breed/${breedFamily}/${subBreed}/images/random/20`
        );
      } else
        return axios.get(
          `https://dog.ceo/api/breed/${breedFamily}/images/random/20`
        );
    },
    SAVE_FAVORITE_DOG({ state }, favoriteDog) {
      if (!state.favoriteDogs.includes(favoriteDog)) {
        state.favoriteDogs.push(favoriteDog);
        const favoriteDogsInJSON = JSON.stringify(state.favoriteDogs);
        localStorage.setItem(FAVORITES_KEY, favoriteDogsInJSON);
      }
    },
    REMOVE_DOG_FROM_FAVORITES({ state }, removedDog) {
      state.favoriteDogs = state.favoriteDogs.filter(
        (dog) => dog !== removedDog
      );
      const favoriteDogsInJSON = JSON.stringify(state.favoriteDogs);
      localStorage.setItem(FAVORITES_KEY, favoriteDogsInJSON);
    },
  },
  modules: {},
});
