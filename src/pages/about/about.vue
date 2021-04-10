<template>
  <div class="about">
    <main>
     <div class="container">
        <h1>About</h1>
        <br>
        <p>I was born in Sao Paulo, Brazil and moved to Canada at the age of 17. I didn't know much about Canada, except that it gets a lot of snow. After having moved to Calgary, Alberta, I can now say that is a definite fact. Learning the English language was challenging, but also exciting, as it has always been my dream to live in an English speaking country and become fully biligual.
          <br></br>
          After graduating high school, I started working full time with the goal of saving as much money as I can. After years of working jobs I wasn't passionate about, I decided to find and follow something more interesting. That is why I learned how to code. I wanted to feel like I can create something from scratch, and with the digital age in full swing, I decided to take my shot at building websites. My goal is to create simple, classy websites that are user friendly. 
          <br></br>
          Check out my portfolio, and if you have any questions or comments, please <a href="contact">contact me</a>. Thank you for visiting!
        </p>
        <br><br>
        <h2>My skills</h2>
        <br>
        <ul>
          <li class="skill html">HTML</li>
          <li class="skill css">CSS / SASS</li>
          <li class="skill javascript">JavaScript</li>
          <li class="skill vue">Vue</li>
          <li class="skill sql">SQL</li>
          <li class="skill python">Python</li>
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
        max-width: 100px;
        animation-delay: 0.6s;
        background-color: #FFEE58;
      }

      &.vue:after {
        max-width: 100px;
        animation-delay: 0.8s;
        background-color: #66BB6A;
      }

      &.sql:after {
        max-width: 120px;
        animation-delay: 1s;
        background-color: rgba(19, 17, 17, 0.808);

      }
      &.python:after {
        max-width: 130px;
        animation-delay: 1.2s;
        background-color: rgb(60, 171, 207);
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
