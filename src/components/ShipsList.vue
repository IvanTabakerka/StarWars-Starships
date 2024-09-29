<template>
  <div class="ships_list">
    <transition-group name="ships_list">
      <ShipsListElement v-for="item in list" :item="item" :key="item.name"></ShipsListElement>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import ShipsListElement from "@/components/ShipsListElement.vue";
import type {Ships} from "@/interfaces/Ships";

// Initial statement
const props = defineProps({
  list: Array<Ships>
})
</script>

<style lang="sass" scoped>
@import "@/assets/sass/ui_variables"

.ships_list
  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: $sizeConstant*2

@media screen and (max-width: 600px)
  .ships_list
    grid-template-columns: 1fr
</style>