<template>
  <div class="home" ref="home">
    <div class="home__header">
      <BaseSelect
        :options="breeds"
        placeholder="Выберите породу"
        @select="$router.push({ name: 'BreedGallery', params: { id: $event } })"
      />
      <div class="home__header__right-text dg-general">
        <span style="padding-right: 8px">Сортировка по алфавиту</span>
        <BaseSwitch v-model="isSorted" />
      </div>
    </div>
    <Gallery :dogs="isSorted ? sortedDogs : dogs" />
  </div>
</template>

<script>
import Gallery from "../../components/Gallery";
import BaseSwitch from "../../base-components/BaseSwitch";
import { mapActions } from "vuex";
import BaseSelect from "../../base-components/BaseSelect";
import { capitalizeFirstLetter } from "../../../utils";

export default {
  name: "Home",
  components: { BaseSelect, Gallery, BaseSwitch },
  data() {
    return {
      dogs: [],
      breeds: [],
      options: ["dog1", "dog2"],
      isSorted: false,
    };
  },
  beforeMount() {
    this.getDogs();
    this.getBreeds();
  },
  mounted() {
    this.$refs.home.addEventListener("scroll", (event) => {
      const element = event.target;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        this.getDogs();
      }
    });
  },
  computed: {
    sortedDogs() {
      const temp = [...this.dogs];
      return temp.sort((a, b) =>
        a.split("/")[4].localeCompare(b.split("/")[4])
      );
    },
  },
  methods: {
    ...mapActions(["GET_DOGS", "GET_ALL_BREEDS"]),
    async getDogs() {
      let response = await this.GET_DOGS();
      this.dogs = [...this.dogs, ...response.data.message];
    },
    async getBreeds() {
      const breedsList = [];
      let response = await this.GET_ALL_BREEDS();
      for (let breed in response.data.message) {
        if (response.data.message[breed].length) {
          response.data.message[breed].forEach((subBreed) => {
            breedsList.push({
              text: `${capitalizeFirstLetter(subBreed)} ${capitalizeFirstLetter(
                breed
              )}`,
              value: `${breed}-${subBreed}`,
            });
          });
        } else {
          breedsList.push({
            text: capitalizeFirstLetter(breed),
            value: breed,
          });
        }
      }
      this.breeds = breedsList.sort((a, b) => a.text.localeCompare(b.text));
    },
  },
};
</script>

<style lang="sass">
@import "../../assets/styles/typography"
.home
  overflow: auto
  height: calc(100% - 100px)
  &__header
    padding: 40px 0 40px 60px
    display: flex
    flex-direction: row
    &__right-text
      display: flex
      flex-direction: row
      align-items: center
      padding-right: 40px
      margin-left: auto
</style>
