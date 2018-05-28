<template>
  <div>
    <div style="z-index: 0; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: url('/static/Wallpaper 10.jpg'); background-size: cover;">
      <h1 style="position: absolute; top: 30%; text-align: center; color: white; width: 100%;">You need to be connected<br/>
        <v-btn color="blue darken-1" style="background-color: rgba(100, 120, 180, 0.6); padding: 10px; padding-bottom: 50px;" flat @click.native="login()">Click here</v-btn>
      </h1>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data: () => ({
  }),
  methods: {
    login () {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log('cuccess')
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
