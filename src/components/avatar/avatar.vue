<template>
  <div class="avatar" :style="style">
    <img :src="image" v-if="image">
  </div>
</template>

<script>
export default {
  name: 'Avatar',

  props: {
    size: String,
    image: String,
  },

  computed: {
    style () {
      return {
        '--size': `${this.size}px`,
      }
    },
  },
}
</script>

<style lang="scss">
  @import '../../styleguide/color.scss';
  @import '../../styleguide/spacing.scss';
  
  .avatar {
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    background-color: $gray-200;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
