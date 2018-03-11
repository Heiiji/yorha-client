<template>
  <div>
    <br/><br/><br/>
      <div v-bind:class="{ 'current' : login, 'invisible' : signup }">
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.mail" type="text" id="Mail1">
          <label class="mdl-textfield__label" for="Mail1">Mail</label>
        </div>
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.passw" type="password" id="passw1">
          <label class="mdl-textfield__label" for="passw1">Password</label>
        </div>
        <br/><br/>
        <button style="z-index: 20;" v-on:click="Login()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Login
        </button>
        <button style="z-index: 20;" v-on:click="swap()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Signup
        </button>
      </div>
      <div  v-bind:class="{ 'current' : signup, 'invisible' : login }">
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.username" type="text" id="username">
          <label class="mdl-textfield__label" for="Mail">username</label>
        </div>
          <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" v-model="credential.mail" type="email" id="Mail">
            <label class="mdl-textfield__label" for="Mail">Mail</label>
          </div><br/>
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.passw" type="password" id="passw">
          <label class="mdl-textfield__label" for="passw">Password</label>
        </div>
        <div style="z-index: 20;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model="credential.passwc" type="password" id="passwc">
          <label class="mdl-textfield__label" for="passwc">Confirmation</label>
        </div>
        <br/><br/>
        <button style="z-index: 20;" v-on:click="Signup()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Register
        </button>
        <button style="z-index: 20;" v-on:click="swap()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Login
        </button>
      </div>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'Login',
  data () {
    return {
      test: '',
      message: 'none',
      login: true,
      signup: false,
      user: [],
      credential: {
        username: '',
        mail: '',
        passw: '',
        passwc: ''
      }
    }
  },
  mounted () {
    this.test = this.$store.state.test
  },
  methods: {
    swap () {
      this.login = !this.login
      this.signup = !this.signup
    },
    Login () {
      AccountService.LogUser(this.credential).then((response) => {
        this.$store.commit('LOGIN_SUCCESS', response.data)
        this.$router.push('/')
      })
    },
    Signup () {
      if (this.passw !== this.passwc) {
        this.message = 'Passwords doesn\'t correspond'
        return ('error')
      }
      AccountService.addUser(this.credential)
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
