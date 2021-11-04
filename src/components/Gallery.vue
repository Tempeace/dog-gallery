<template>
  <div class="gallery" @scroll="$emit('scroll')">
    <div v-for="(dog, index) in dogs" :key="index" class="gallery__container">
      <img :src="dog" alt="" class="gallery__container__img" />
      <div class="gallery__container__text">
        {{ dog.split("/")[4] }}
      </div>
      <button
        @click="
          favoriteDogs.includes(dog)
            ? removeDogFromFavorites(dog)
            : saveFavoriteDog(dog)
        "
      >
        <mdicon
          :name="favoriteDogs.includes(dog) ? 'heart' : 'heart-outline'"
          class="gallery__container__icon"
          :height="30"
          :width="30"
          @click="saveFavoriteDog(dog)"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Gallery",
  props: {
    dogs: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState(["favoriteDogs"]),
  },
  methods: {
    ...mapActions(["SAVE_FAVORITE_DOG", "REMOVE_DOG_FROM_FAVORITES"]),
    saveFavoriteDog(favoriteDog) {
      this.SAVE_FAVORITE_DOG(favoriteDog);
    },
    removeDogFromFavorites(removedDog) {
      this.REMOVE_DOG_FROM_FAVORITES(removedDog);
    },
  },
};
</script>

<style lang="sass">
@import "src/assets/styles/colors.sass"
.gallery
  padding: 0 30px 30px 60px
  display: flex
  flex-direction: row
  flex-wrap: wrap
  &__container
    position: relative
    margin-top: 30px
    margin-right: 30px
    width: calc(25% - 30px)

    &__icon
      cursor: pointer
      color: white
      position: absolute
      top: 20px
      left: 20px
    &__img
      width: 100%
      height: 300px
      border-radius: 8px
      mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) -36.36%, #000000 100%)
    &__text
      bottom: 20px
      right: 20px
      position: absolute
      font-style: normal
      font-weight: 600
      font-size: 25px
      line-height: 28px
      text-align: right
      text-transform: capitalize
      letter-spacing: 0.01em
      color: $white
</style>
