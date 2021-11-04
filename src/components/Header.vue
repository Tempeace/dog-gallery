<template>
  <div class="header">
    <router-link class="header__title" :to="{ name: 'Home' }">
      ПЁСЕЛЬ
    </router-link>
    <div
      class="header__right-text dg-general"
      @click="$router.push({ name: 'Favorites' })"
    >
      Избранные пёсели
      <mdicon
        :name="$route.name === 'Favorites' ? 'heart' : 'heart-outline'"
        :height="24"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="sass">
@import "src/assets/styles/typography.sass"
.header
  height: 100px
  background: $sub-black
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.55)
  &__title
    font-size: 20px
    color: $blue
    padding-left: 60px
    cursor: pointer
  &__right-text
    padding-right: 40px
    cursor: pointer
</style>
