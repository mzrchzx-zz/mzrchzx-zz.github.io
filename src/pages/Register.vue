<template>
  <div>
  <HeaderAuth></HeaderAuth>
  <div class="register">
    <div class="main">
      <div class="header">Register</div>
      <form novalidate class="content" @submit.prevent="validateUser">

      <md-field :class="getValidationClass('email')">
        <label for="email">E-mail</label>
        <md-input id="email" type="text" v-model.trim="form.email" placeholder="Example@gmail.com" autocomplete="given-email" :disabled="sending"></md-input>
        <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
        <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
      </md-field>

      <md-field :class="getValidationClass('name')">
        <label for="name">Name</label>
        <md-input id="name" type="text" v-model="form.name" placeholder="Tony Stark" autocomplete="given-name" :disabled="sending"></md-input>
        <span class="md-error" v-if="!$v.form.name.required">The first name is required</span>
        <span class="md-error" v-else-if="!$v.form.name.minlength">Invalid first name</span>
      </md-field>
      
        <md-field :class="getValidationClass('password')">
          <label>Password</label>
          <md-input v-model.trim="form.password" type="password" :disabled="sending"></md-input>
          <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
          <span class="md-error" v-else-if="!$v.form.password.maxlength">Invalid password</span>
        </md-field>

        <md-field :md-toggle-password="true" :class="getValidationClass('repeatPassword')">
          <label>Password again</label>
          <md-input v-model.trim="form.repeatPassword" type="password"  :disabled="sending"></md-input>
           <span class="md-error" v-if="!$v.form.repeatPassword.sameAsPassword">Invalid password</span>
        </md-field>

      <md-progress-bar md-mode="indeterminate" v-if="sending" />

      <div class="buttons">
        <md-button v-bind:style="registerBtn" class="md-raised" @click="makeRegister" type="submit" :disabled="sending">
              Register
        </md-button>
      </div>
      </form>
      
      <md-snackbar :md-active.sync="userSaved">The user {{ form.name }} was registered success!</md-snackbar>

      <div class="error" v-if="error">
        {{ error }}
      </div>
    </div>
    <div class="login">
      <span>I already have an account,</span>
      <span>
        <router-link :to="{ name: 'login' }">
        LOG IN
        </router-link>
        </span>
    </div>
  </div>
  </div>
</template>

<script>
import HeaderAuth from '../layout/HeaderAuth.vue'
import { validationMixin, } from 'vuelidate'

import {
    required,
    email,
    minLength,
    maxLength,
    sameAs
  } from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  components: {
    HeaderAuth,
  },
  mixins: [validationMixin],
  data () {
    return {
      userSaved: false,
      sending: false,
      error: '',
      form: {
        email: null,
        password: null,
        repeatPassword: null,
        name: null,
      },
      registerBtn: {
        color: 'white',
        background:'#349A89',
        borderRadius: '4px',
        fontFamily: 'Helvetica',
        fontSize: '16px',
        lineHeight: '18px',
        width: '100%',
        height: '58px'
      },
    }
  },
validations: {
      form: {
        email: {
          required,
          email
        },
        name: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          maxLength: minLength(6)
        },
        repeatPassword: {
          sameAsPassword: sameAs('password')
        },
      }
    },
  methods: {
    async makeRegister () {
      this.sending = true
      this.error = '';
      try {
        await this.$store.dispatch('signup', {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name
        })
        this.userSaved = true
        this.clearForm();

      } catch (error) {
        this.userSaved = false
        this.$store.commit('toast/NEW', { type: 'error', message: error.message })
        this.error = error.message
      }
      window.setTimeout(() => {
           this.sending = false
        }, 1500)
    },
    getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.name = null
        this.form.email = null
        this.form.password = null
        this.form.repeatPassword = null
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.makeRegister()
        }
      }
  }
}
</script>

<style lang="scss" scoped>
  
.register {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  position: relative;


  .login {
    margin-top: 24px;
    padding: 30px 93px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
  }
  
  .main {
    padding: 30px 20px;
    background: #fff;
    width: 425px;
    border-radius: 7px;
    box-shadow: 0 11px 15px -7px rgba(208, 208, 208, 0.13), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(255, 255, 255, 0.64);
    position: relative;

    .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

    .content {
      padding-top: 25px;
    }

    .header {
      font-family: Helvetica;
      font-size: 22px;
      line-height: 25px;
      color: #282828;
    }

    .md-field.md-theme-default label {
      color: #303030;
      pointer-events: auto;
      top: 0;
      opacity: 1;
      font-family: Helvetica;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }
    .md-field::after {
      height: 0;
    }
    .md-input {
      height: 58px;
      padding-left: 12px;
      background: #F9FAFB;
      border: 1px solid #DEDEE0;
      border-radius: 5px;
    }

    .header {
      text-align: center;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
    }

    .error {
      background-color: red;
      padding: 10px;
      font-size: 12px;
      opacity: 1;
      transition: all 0.5s;
    }
  }
}
</style>
