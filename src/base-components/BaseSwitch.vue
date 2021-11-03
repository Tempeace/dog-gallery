<template>
  <label class="switch">
    <input type="checkbox" @click="toggle" />
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  name: "BaseSwitch",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style lang="sass">
@import "src/assets/styles/colors.sass"
.switch
  position: relative
  display: inline-block
  width: 30px
  height: 16px

.switch input
  opacity: 0
  width: 0
  height: 0

.slider
  border: 1px solid $grey
  border-radius: 34px
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: transparent
  -webkit-transition: .4s
  transition: .4s

.slider:before
  border-radius: 50%
  position: absolute
  content: ""
  height: 12px
  width: 12px
  top: 1px
  left: 2px
  background-color: $grey
  -webkit-transition: .4s
  transition: .4s

input:checked + .slider
  background-color: $blue


input:focus + .slider
  box-shadow: 0 0 1px $blue

input:checked + .slider:before
  -webkit-transform: translateX(13px)
  -ms-transform: translateX(13px)
  transform: translateX(13px)
</style>
