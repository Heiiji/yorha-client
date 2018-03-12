<template>
  <div>
    <br/><br/><br/><br/><br/><br/>
      <div v-bind:class="{ 'current' : login, 'invisible' : signup }">
        <v-flex xs15>
        <v-text-field
            style="z-index: 20;"
            name="Mail1"
            label="Mail"
            id="Mail1"
            v-model="credential.mail"
          ></v-text-field>
        </v-flex>
          <v-flex xs15>
          <v-text-field
              style="z-index: 20;"
              name="passw1"
              label="password"
              id="passw1"
              min="8"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              v-model="credential.passw"
            ></v-text-field>
          </v-flex>
        <br/><br/>
        <v-btn style="z-index: 20;" v-on:click="swap()" color="blue">Register</v-btn>
        <v-btn style="z-index: 20;" v-on:click="Login()" color="blue">Login</v-btn>
      </div>
      <div  v-bind:class="{ 'current' : signup, 'invisible' : login }">
        <v-flex xs15>
        <v-text-field
            style="z-index: 20;"
            name="username"
            label="username"
            id="username"
            v-model="credential.username"
          ></v-text-field>
        </v-flex>
          <v-flex xs15>
          <v-text-field
              style="z-index: 20;"
              name="Mail"
              label="Mail"
              id="Mail"
              v-model="credential.mail"
            ></v-text-field>
          </v-flex>
          <v-flex xs15>
          <v-text-field
              style="z-index: 20;"
              name="passw"
              label="password"
              id="passw"
              min="8"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              v-model="credential.passw"
            ></v-text-field>
          </v-flex>
          <v-flex xs15>
          <v-text-field
              style="z-index: 20;"
              name="passwc"
              label="confirm password"
              id="passwc"
              min="8"
              :append-icon="e2 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e2 = !e2)"
              :type="e2 ? 'password' : 'text'"
              v-model="credential.passwc"
            ></v-text-field>
          </v-flex>
        <br/><br/>
        <v-btn style="z-index: 20;" v-on:click="Signup()" color="blue">Register</v-btn>
        <v-btn style="z-index: 20;" v-on:click="swap()" color="blue">Login</v-btn>
      </div>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'Login',
  data () {
    return {
      e1: true,
      e2: true,
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
