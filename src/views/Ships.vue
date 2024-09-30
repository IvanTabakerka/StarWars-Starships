<template>
  <div class="container p-2">
    <ShipsListHeader :count="count" @search="updateSearch"></ShipsListHeader>
    <ShipsList :list="list"></ShipsList>
    <ui-page-nav :page="page" :limit="limit" :count="count" @changePage="changePage"></ui-page-nav>
  </div>
</template>

<script setup lang="ts">
// Components
import ShipsList from "@/components/ShipsList.vue"
import ShipsListHeader from "@/components/ShipsListHeader.vue"

// Imports
import {ref, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'

// Types
import type {Ref} from 'vue'
import type {Ships} from "@/interfaces/Ships";

// Initial statement
const route = useRoute()
const router = useRouter()

const page:Ref<number> = ref(route.query.page ? parseInt(<string>route.query.page) : 1)
const limit:Ref<number> = ref(10)
const list:Ref<Ships[]> = ref([])
const count:Ref<number> = ref(0)
const search:Ref<string> = ref(route.query.search ? <string>route.query.search : '')

// Methods
import {fetchShipsList} from "@/fetching/fetchShipsList"

/**
 * Update search data
 * @param newSearch - Search string for query
 */
const updateSearch = async (newSearch: string) => {
  await router.push({
    query: {
      search: newSearch,
      page: 1
    }
  })
  search.value = newSearch
  await rebuildPage(1, newSearch)
}

/**
 * Fetch page data
 * @param fetchingPage - Page number
 * @param fetchingSearch - Find by string
 */
const rebuildPage = async (fetchingPage: number, fetchingSearch: string) => {
  const {fetchedList, fetchedCount} = await fetchShipsList(fetchingPage, fetchingSearch)
  list.value = fetchedList
  count.value = fetchedCount
}


/**
 * Set page and rebuild page
 * @param newPage - page number
 */
const changePage = async (newPage: number) => {
  await router.push({
    query: {
      page: newPage,
      search: search.value,
    }
  })
  page.value = newPage
  await rebuildPage(newPage, search.value)
}

// Lifecycle
onMounted( async () => {
  await rebuildPage(page.value, search.value)
})
</script>