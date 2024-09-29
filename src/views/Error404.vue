<template>
  <div class="error">
    <div class="container py-4">
      <div class="error_inner">
        <h1>Error 404</h1>
        <p>Not found</p>
        <RouterLink to="/">
          <ui-btn>Home</ui-btn>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.error
  .error_inner
    display: grid
    gap: 12px
    justify-items: center
    text-align: center
</style>
<script setup lang="ts">
</script>