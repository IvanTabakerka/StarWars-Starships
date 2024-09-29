<template>
  <Header/>
  <RouterView/>
</template>

<style lang="sass">
@import "@/assets/sass/ui.sass"
</style>

<script lang="ts" setup>
import Header from "@/components/shell/Header.vue";
</script>