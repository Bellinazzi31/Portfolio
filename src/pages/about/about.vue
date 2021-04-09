<template>
  <div class="about">
    <main>
     <div class="container">
        <h1>About</h1>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br><br>
        <h2>My skills</h2>
        <br>
        <ul>
          <li class="skill html">HTML</li>
          <li class="skill css">CSS / SASS</li>
          <li class="skill javascript">JavaScript</li>
          <li class="skill vue">Vue</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'about',
  }
</script>

<style lang="scss">
  @import '../../styleguide/font.scss';
  @import '../../styleguide/color.scss';
  @import '../../styleguide/spacing.scss';
  @import '../../styleguide/typography.scss';

  .about {
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

    .skill {
      margin-bottom: 24px;
      position: relative;
      align-items: center;
      display: flex;

      &:after {
        width: auto;
        height: 4px;
        content: '';
        animation-timing-function: cubic-bezier(0.42,0,1,1);
        animation-fill-mode: forwards;
        animation-duration: 2s;
        animation-name: skill;
        position: absolute;
        left: 0px;
        bottom: -12px;
      }

      &.html:after {
        animation-delay: 0.2s;
        background-color: #EF6C00;
        max-width: 200px;
      }

      &.css:after {
        max-width: 180px;
        animation-delay: 0.4s;
        background-color: #F06292;
      }

      &.javascript:after {
        max-width: 140px;
        animation-delay: 0.6s;
        background-color: #FFEE58;
      }

      &.vue:after {
        max-width: 100px;
        animation-delay: 0.8s;
        background-color: #66BB6A;
      }
    }

    @keyframes skill {
      from {
        width: 0px;
      }

      to {
        width: 100%;
      }
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
