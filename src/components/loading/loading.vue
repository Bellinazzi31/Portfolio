<template>
  <div class="loading">
    <div class="loading__bullets">
      <div class="loading__bullet"></div>
      <div class="loading__bullet"></div>
      <div class="loading__bullet"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style lang="scss">
  @import '../../styleguide/color.scss';

  @keyframes ANIMATION {
    from { opacity: 0; transform: scale(0); }
    to { opacity: 1;  transform: scale(1); }
  }
  
  .loading {  
    &__bullets {
      width: 48px;
      height: 12px;
      display: flex;
    }
  
    &__bullet {
      width: 12px;
      height: 12px;
      animation: ANIMATION 0.5s 0s infinite alternate ease-in-out backwards;
      border-radius: 100%;
      margin: 0 2px;
      opacity: 0;
    }
  
    &__bullet:nth-child(1) {
      animation-delay: 0s;
      background-color: $secondary;
    }
  
    &__bullet:nth-child(2) {
      animation-delay: 0.2s;
      background-color: $secondary;
    }
  
    &__bullet:nth-child(3) {
      animation-delay: 0.4s;
      background-color: $secondary;
    }
  }
</style>
