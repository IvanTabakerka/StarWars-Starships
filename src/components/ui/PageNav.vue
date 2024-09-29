<template>
  <div class="page_nav py-3" v-if="<number>count><number>limit">
    <div class="page_nav_inner">
      <ui-btn @click="changePage(<number>page-1)" v-if="page != 1">Prev</ui-btn>
      <span class="page_nav_bullet" v-for="item in bulletsCount" @click="changePage(item)" :class="{'active': item == page}" :key="item">{{item}}</span>
      <ui-btn @click="changePage(<number>page+1)" v-if="page != bulletsCount">Next</ui-btn>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ui-page-nav'
}
</script>


<script setup lang="ts">
import { computed } from 'vue'

// Initial statement
const props = defineProps({
  page: Number,
  count: Number,
  limit: Number
})

// Emits
const emit = defineEmits(['changePage'])

// Computed
const bulletsCount = computed(() => {
  return Math.ceil(<number>props.count/<number>props.limit)
})

// Methods
function changePage (page: number) {
  emit('changePage', page)
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/ui_variables"

.page_nav
  & .page_nav_inner
    display: flex
    justify-content: center
    align-items: center
    gap: $sizeConstant * 2
    & .page_nav_bullet
      width: 32px
      height: 32px
      display: flex
      align-items: center
      justify-content: center
      border-radius: 50%
      overflow: hidden
      background-color: $colorDark
      transition-duration: 0.2s
      transition-property: background-color
      cursor: pointer
      color: $colorGrayLight
      &.active
        background: $colorMedium
        pointer-events: none
        cursor: default
</style>