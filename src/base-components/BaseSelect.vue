<template>
  <div class="base-select" @blur="isOpened = false">
    <div
      class="base-select__selected"
      :class="{ 'base-select--opened': isOpened }"
      @click="isOpened = !isOpened"
    >
      {{ selected ? selected : placeholder }}
    </div>
    <div
      class="base-select__container"
      :class="{ 'base-select--hided': !isOpened }"
    >
      <div
        class="base-select__container__item"
        v-for="(option, i) of options"
        :key="i"
        @click="onSelect(option.value)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      selected: this.value ? this.value : "",
      isOpened: false,
    };
  },
  methods: {
    onSelect(option) {
      this.selected = option;
      this.isOpened = false;
      this.$emit("select", option);
    },
  },
};
</script>

<style lang="sass">
@import "src/assets/styles/colors.sass"
.base-select
  position: relative
  width: 300px
  text-align: left
  outline: none
  height: 47px
  line-height: 47px

  &--hided
    display: none

  &__selected
    background-color: transparent
    border-radius: 6px
    border: 1px solid $grey
    color: $white
    padding-left: 1em
    cursor: pointer
    user-select: none

  &--opened
    border: 1px solid $blue
    border-radius: 6px 6px 0px 0px

  &__selected:after
    position: absolute
    content: ""
    top: 22px
    right: 1em
    width: 0
    height: 0
    border: 5px solid #fff
    border-color: #fff transparent transparent transparent

  &__container
    color: #fff
    border-radius: 0 0 6px 6px
    overflow-y: auto
    height: 200px
    border-right: 1px solid $blue
    border-left: 1px solid $blue
    border-bottom: 1px solid $blue
    position: absolute
    background-color: #0a0a0a
    left: 0
    right: 0
    z-index: 1

    &__item
      color: #fff
      padding-left: 1em
      cursor: pointer
      user-select: none

    &__item:hover
      background-color: $blue
</style>
