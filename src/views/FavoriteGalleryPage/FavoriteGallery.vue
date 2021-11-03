<template>
  <div class="favorite-gallery">
    <Gallery :dogs="favoriteDogs" />
  </div>
</template>

<script>
import Gallery from "../../components/Gallery";
import { mapState } from "vuex";

export default {
  name: "FavoriteGallery",
  components: {
    Gallery,
  },
  computed: {
    ...mapState(["favoriteDogs"]),
  },
};
</script>

<style lang="sass">
.favorite-gallery
  overflow: auto
  height: calc(100% - 100px)
</style>
