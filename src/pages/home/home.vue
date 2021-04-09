<template>
  <div class="home">
    <main>
      <div class="container">
        <h1>Hi, I'm Felipe Bellinazzi 👋🏼</h1>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>You can find me on <a href="#" target="_blank">GitHub</a>, <a href="#" target="_blank">Twitter</a> and <a href="#" target="_blank">LinkedIn</a>.</p>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'home',
  }
</script>

<style lang="scss">
  @import '../../styleguide/font.scss';
  @import '../../styleguide/color.scss';
  @import '../../styleguide/spacing.scss';
  @import '../../styleguide/typography.scss';

  .home {
    padding-bottom: 90px;

    main {
      flex: 1;
      display: flex;

      @media (min-width: 1280px) {
        p {
          max-width: 50%;
        }
      }
    }

    .container {
      width: 100%;
      animation-duration: 1s;
      animation-name: fadeIn;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }

      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
</style>
