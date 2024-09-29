<template>
  <header class="header">
    <div class="container p-2 header__inner">
      <RouterLink to="/">
        <div class="header__logo">StarWars Ships Catalog</div>
      </RouterLink>
      <nav class="header__menu">
        <ul>
          <li class="header__menu__item">
            <RouterLink class="link" to="/">Home</RouterLink>
          </li>
          <li class="header__menu__item">
            <RouterLink class="link" to="/ships/">Catalog</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="sass" scoped>
@import "@/assets/sass/ui_variables.sass"
.header
  background-color: $colorDeep
  &__inner
    display: flex
    justify-content: space-between
  &__logo
    font-size: $fontSizeTitle
    font-weight: bold
  &__menu
    ul
      display: flex
      gap: sizeCalc(2)
@media screen and (max-width: 600px)
  .header
    &__inner
      flex-direction: column
</style>