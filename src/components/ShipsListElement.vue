<template>
    <RouterLink class="ships_list_element p-2" :to="disableLink ? '' : `/ships/${idFromURL}/`">
      <h3>{{item?.name}}</h3>
      <span class="p-1">{{item?.starship_class}}</span>
      <span class="p-1" v-if="item?.cost_in_credits !== 'unknown'">{{item?.cost_in_credits}}<b>$</b></span>
    </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type {PropType} from 'vue'
import type {Ships} from "@/interfaces/Ships";

// Initial statement
const props = defineProps({
  item: Object as PropType<Ships>,
  disableLink: Boolean
})

// Computed
const idFromURL = computed(() => {
  // Странно что в API не передается ID элемента, поэтому вот такой костыль
  return props.item?.url.split('/')[5]
})

</script>

<style lang="sass" scoped>
@import "@/assets/sass/ui_variables"

.ships_list_element
  background-color: $colorDeep
  display: flex
  gap: $sizeConstant
  flex-wrap: wrap
  cursor: pointer
  & h3
    flex: 1 1 100%
  & span
    background-color: $colorSemiDark
    white-space: nowrap
    text-transform: capitalize
</style>