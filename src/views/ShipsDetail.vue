<template>
  <div class="container p-2">
    <div class="ships_detail">
      <ShipsListElement :item="element" disableLink></ShipsListElement>
      <div class="ships_detail_text p-2">
        <ul>
          <li v-for="(param, index) in element">
            <b>{{index}}:</b> {{ param }}
          </li>
        </ul>
        <RouterLink to="/ships/">
          <ui-btn class="my-2">Back</ui-btn>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import ShipsListElement from "@/components/ShipsListElement.vue"

// Imports
import {ref, onMounted} from 'vue'
import {type RouteParamValue, useRoute, useRouter} from 'vue-router'

// Types
import type {Ref} from 'vue'
import type {Ships} from "@/interfaces/Ships";

// Initial statement
const route = useRoute()
const router = useRouter()

const element:Ref<Ships> = ref({} as Ships)

// Methods
import {fetchShipsElement} from "@/fetching/fetchShipsElement"
import UiBtn from "@/components/ui/Btn.vue";

/**
 * Fetch page data
 * @param fetchingId - Element id
 */
const rebuildPage = async (fetchingId: string | RouteParamValue[]) => {
  const {fetchedElement} = await fetchShipsElement(fetchingId)
  if (Object.values(fetchedElement).length > 0) {
    element.value = fetchedElement
    document.title = fetchedElement.name
  } else {
    await router.push('/404/')
  }
}

// Lifecycle
onMounted( async () => {
  await rebuildPage(route.params.id)
})
</script>

<style lang="sass" scoped>
.ships_detail
  display: grid
  grid-template-columns: 1fr 2fr
  align-items: center
  & .ships_detail_text
    & b
      text-transform: uppercase
@media screen and (max-width: 600px)
  .ships_detail
    grid-template-columns: 1fr
</style>