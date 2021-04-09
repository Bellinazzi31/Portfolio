<template>
  <div class="app">
    <Header />

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components: {
      Header: () => import(/* webpackChunkName: "header" */ './components/header'),
    }
  }
</script>

<style lang="scss">
  @import './styleguide/reset.scss';
  @import './app.scss';
</style>
