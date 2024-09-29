<template>
  <div class="ships_list_header p-2 mb-3">
    <h3>Ships: {{count}}</h3>
    <div class="ships_list_header_search p-1">
      <ui-input id="search" type="text" class="medium" v-model="searchValue"></ui-input>
      <ui-btn @click="emitSearchData">Search</ui-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
// Initial statement
import {ref, type Ref} from "vue";

defineProps({
  count: Number
})
const searchValue:Ref<string> = ref('')

// Emits
const emit = defineEmits(['search'])

// Methods
function emitSearchData (event: object) {
  emit('search', searchValue.value)
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/ui_variables"

.ships_list_header
  background-color: $colorDeep
  display: flex
  gap: $sizeConstant
  justify-content: space-between
  align-items: center
  & .ships_list_header_search
    background-color: $colorSemiDark
    display: grid
    grid-template-columns: 1fr 1fr
    align-items: center
    & span
      text-align: center
@media screen and (max-width: 600px)
  .ships_list_header
    flex-direction: column
    & .ships_list_header_search
      width: 100%
      grid-template-columns: 1fr
</style>