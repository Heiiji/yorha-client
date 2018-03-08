<template>
  <div>
    <br/><br/><br/>
      <div v-bind:class="{ 'current' : login, 'invisible' : signup }">
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.login" type="text" id="Mail">
          <label class="mdl-textfield__label" for="Mail">Mail</label>
        </div>
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.passw" type="password" id="passw">
          <label class="mdl-textfield__label" for="passw">Password</label>
        </div>
        <br/><br/>
        <button style="z-index: 20;" v-on:click="swap()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Login
        </button>
        <button style="z-index: 20;" v-on:click="swap()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Signup
        </button>
      </div>
      <div  v-bind:class="{ 'current' : signup, 'invisible' : login }">
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="this.credential.login" type="text" id="Mail">
          <label class="mdl-textfield__label" for="Mail">Mail</label>
        </div>
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.passw" type="password" id="passw">
          <label class="mdl-textfield__label" for="passw">Password</label>
        </div>
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.passwc" type="password" id="passwc">
          <label class="mdl-textfield__label" for="passwc">Confirmation</label>
        </div>
        <br/><br/>
        <button style="z-index: 20;" v-on:click="swap()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Register
        </button>
        <button style="z-index: 20;" v-on:click="swap()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Login
        </button>
      </div>
  </div>
</template>

<script>
// import AccountService from '@/services/AccountService'

export default {
  name: 'Login',
  data () {
    return {
      login: true,
      signup: false,
      credential: {
        login: '',
        passw: '',
        passwc: ''
      }
    }
  },
  methods: {
    swap () {
      this.login = !this.login
      this.signup = !this.signup
    }
  }
}
</script>

<style>
.current{
  display: inline-block;
  box-shadow: 2px;
}
.invisible{
  display: none;
}
</style>
