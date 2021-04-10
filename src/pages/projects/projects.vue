<template>
  <div class="projects">
    <main>
      <div class="container">
        <h1>Projects</h1>
        <br>
        <div class="projects__list">
          <a href="https://github.com/Bellinazzi31/Okotoks-Pizza" target="_blank" class="projects__item">
            <h3>Okotoks-Pizza</h3>
            <p>This is my very first coding project, created with HTML and CSS. It's a website for a potential pizza restaurant that really enjoyed creating..⚡️</p>
          </a>
          <a href="https://github.com/Bellinazzi31/css-dropdown-" target="_blank" class="projects__item">
            <h3>Dropdown-Menu</h3>
            <p>Here's another sample of my work. It's a basic dropdown menu that's very user friendly.⚡️</p>
          </a>
          <a href="https://github.com/Bellinazzi31/twiter2" target="_blank" class="projects__item">
            <h3>Tweeter-Backend</h3>
            <p>This is my first Backend project. I used SQL, API and Python. ⚡️</p>
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
