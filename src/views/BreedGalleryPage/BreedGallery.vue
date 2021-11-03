<template>
  <div class="breed-gallery">
    <Gallery :dogs="dogsByBreed" />
  </div>
</template>

<script>
import Gallery from "../../components/Gallery";
import { mapActions } from "vuex";

export default {
  name: "BreedGallery",
  components: {
    Gallery,
  },
  data() {
    return {
      dogsByBreed: [],
    };
  },
  beforeMount() {
    this.getDogsByBreed();
  },
  methods: {
    ...mapActions(["GET_DOGS_BY_BREED"]),
    async getDogsByBreed() {
      const response = await this.GET_DOGS_BY_BREED(this.$route.params.id);
      this.dogsByBreed = response.data.message;
    },
  },
};
</script>

<style lang="sass">
.breed-gallery
  overflow: auto
  height: calc(100% - 100px)
</style>
