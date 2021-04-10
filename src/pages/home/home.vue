<template>
  <div class="home">
    <main>
      <div class="container">
        <div class="text">
          <h1>Hi, I'm Felipe Bellinazzi 👋🏼</h1>
          <br>
          <p>Several years ago, I started to gain interest in coding and web development. So I decided to enroll myself in a Full Stack Development program at InnoTech College. I've been learning and enhancing my skills for the past 8 months. While challenging at times, it's also been quite rewarding, especially when I get to build websites from scratch. I have a long way to go, but I am constantly working, reading, experimenting, and creating. </p>
          <p>You can find me on <a href="https://github.com/Bellinazzi31" target="_blank">GitHub</a>, <a href="https://www.linkedin.com/in/felipe-bellinazzi/" target="_blank">LinkedIn</a> and <a href="https://drive.google.com/file/d/1Vu6ns_jWLhfEthOdLUwADg6GeA1wreoc/view?usp=sharing" target="_blank">Resume.</a></p>
        </div>
        <div class="photo">
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHTr6lw8KhN7Q/profile-displayphoto-shrink_800_800/0/1616009491218?e=1623283200&v=beta&t=kpikXnw7isoQ_BeZ6qBaF0-zFQ6vLyveYprO04DjRAI">
        </div>  
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
        .text {
          flex: 0 50%;
        }
      }
    }

    .container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      animation-duration: 1s;
      animation-name: fadeIn;
    }

    
    
    .photo {
      flex: 0 100px 100px;
      width: 100px;
      height: 100px;
      overflow: hidden;
      border-radius: 100%;

      img {
        width: 100%;
        height: 100%;
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
