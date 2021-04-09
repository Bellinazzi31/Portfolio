<template>
  <header class="header">
    <div class="container">
      <div>
        <span class="header__logo">
          <router-link to="/">Bellinazzi</router-link>
        </span>
      </div>
      <ul class="header__menu">
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  
  computed: {},

  components: {},
}
</script>

<style lang="scss">
  @import '../../styleguide/color.scss';
  @import '../../styleguide/spacing.scss';
  
  .header {
    width: 100%;
    border-bottom: 1px solid #eee;

    .container {
      justify-content: space-between;
      padding: $spacing-24 0;
      display: flex;
    }

    &__logo {
      font-size: 18px;
      color: $gray-800;
      display: block;
    }

    &__menu {
      display: flex;

      li + li {
        margin-left: 24px;
      }
    }

    @media (max-width: 640px) {
      padding: 0 12px;
    }

    @media (min-width: 640px) {
      padding: 0 24px;
    }
  }
</style>
