<template>
  <div class="projects">
    <main>
      <div class="container">
        <h1>Projects</h1>
        <br>
        <div class="projects__list">
          <a href="#" target="_blank" class="projects__item">
            <h3>Project title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. ⚡️</p>
          </a>
          <a href="#" target="_blank" class="projects__item">
            <h3>Project title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. ⚡️</p>
          </a>
          <a href="#" target="_blank" class="projects__item">
            <h3>Project title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. ⚡️</p>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'projects',
  }
</script>

<style lang="scss">
  @import '../../styleguide/font.scss';
  @import '../../styleguide/color.scss';
  @import '../../styleguide/spacing.scss';
  @import '../../styleguide/typography.scss';

  .projects {
    padding-bottom: 90px;

    main {
      flex: 1;
      display: flex;    
    }

    .container {
      width: 100%;
      animation-duration: 1s;
      animation-name: fadeIn;
    }

    &__list {
      width: 100%;
      column-gap: 24px;
      display: flex;
    }

    &__item {
      width: auto;
      height: 280px;
      border-radius: 4px;
      border-top: 2px solid $primary;
      background-color: #eee;
      padding: 24px;
      flex: 1;
    }
  }
</style>
