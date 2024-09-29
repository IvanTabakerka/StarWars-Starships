<template>
  <div class="home">
    <div class="container py-4">
      <div class="home_inner">
        <h1>All the Star Wars starships</h1>
        <p>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!</p>
        <p>We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software.</p>
        <p>Then we went and stuck an API on the front so you can access it all!</p>
        <RouterLink to="/ships/">
          <ui-btn>Catalog</ui-btn>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.home
  .home_inner
    display: grid
    gap: 12px
    justify-items: center
    text-align: center
</style>