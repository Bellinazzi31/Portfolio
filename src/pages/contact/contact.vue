<template>
  <div class="contact">
    <main>
     <div class="container">
        <h1>Contact</h1>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <br><br>
        <form v-on:submit.prevent="submit" class="form">
          <div class="form__field">
            <label for="name">Name:</label>
            <input id="name" type="text" v-model="name">
          </div>
          <div class="form__field">
            <label for="email">Email:</label>
            <input id="email" type="text" v-model="email">
          </div>        
          <div class="form__field">
            <label for="message">Message:</label>
            <textarea id="message" v-model="message"></textarea>
          </div>
          <div class="form__field">
            <button class="button button--cta" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'contact',

    data () {
      return {
        name: '',
        email: '',
        message: '',
      }
    },

    methods: {
      submit () {
        alert('Message sent! Thank you. 😛')
      },
    },
  }
</script>

<style lang="scss">
  @import '../../styleguide/font.scss';
  @import '../../styleguide/color.scss';
  @import '../../styleguide/spacing.scss';
  @import '../../styleguide/typography.scss';
  @import '../../styleguide/button.scss';

.contact {
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

    .form {
      @media (min-width: 1280px) {
        max-width: 480px;
      }

      &__field{
        margin-bottom: 24px;

        input, textarea {
          width: 100%;
          font-size: 16px;
          color: #999;
          border-radius: 4px;
          border-bottom: 2px solid #eee;
          padding: 12px 0;
        }

        label {
          display: block;
        }

        textarea {
          min-height: 120px;
        }
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
