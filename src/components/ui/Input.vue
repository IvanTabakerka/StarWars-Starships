<template>
  <input
      class="input"
      :value="modelValue"
      @input="updateInput"
      type="text"
  >
</template>


<script lang="ts">
export default {
  name: 'ui-input'
}
</script>

<script setup lang="ts">
// Initial statement
const props = defineProps({
  modelValue: [String, Number]
})

// Emits
const emit = defineEmits(['update:modelValue'])

// Methods
function updateInput (event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/ui_variables"
.input
  display: inline-flex
  justify-content: center
  align-items: center
  padding-top: $sizeConstant*1.4
  padding-bottom: $sizeConstant*1.4
  padding-left: $sizeConstant*2
  padding-right: $sizeConstant*2
  border: calc($sizeConstant/3) solid $colorDark
  border-radius: 0
  background-color: $colorDark
  color: $colorGrayLight
  font-size: $fontSize
  transition-duration: 0.2s
  transition-property: color, background-color
  &.deep
    border: calc($sizeConstant/3) solid $colorDeep
    background-color: $colorDeep
  &:hover
    background-color: $colorMedium
    color: $colorLight
  &.medium
    background-color: $colorMedium
    border: calc($sizeConstant/3) solid $colorDeep
    &:focus
      border: calc($sizeConstant/3) solid $colorDeep
      background-color: $colorDeep
  &.light
    border: calc($sizeConstant/3) solid $colorLight
    background-color: $colorLight
    color: $colorDeep
    &:focus
      border: calc($sizeConstant/3) solid $colorDeep
      background-color: $colorDeep
      color: $colorLight
  &.sm
    padding-top: $sizeConstant
    padding-bottom: $sizeConstant
    padding-left: $sizeConstant*2
    padding-right: $sizeConstant*2
    font-size: $fontSize*0.7
  &.lg
    padding-top: $sizeConstant*2
    padding-bottom: $sizeConstant*2
    padding-left: $sizeConstant*5
    padding-right: $sizeConstant*5
    font-size: $fontSize*1.2
  &.block
    display: flex
</style>