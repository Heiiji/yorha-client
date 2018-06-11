<style scoped>
.flex {
  min-height:20px;
  display:flex;
  position: fixed;
  align-items:center;
  justify-content:center;
  left: calc(45% + 10px);
  top: 30%;
  margin-top: 150px;
  margin-left: 70px;
  z-index: 1;
  -webkit-animation-name: slidelogo2;
  -webkit-animation-duration: 1s;
  -webkit-animation-delay: 1s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-name: slidelogo2;
  -moz-animation-duration: 1s;
  -moz-animation-delay: 1s;
  -moz-animation-fill-mode: forwards;
  -ms-animation-name: slidelogo2;
  -ms-animation-duration: 1s;
  -ms-animation-delay: 1s;
  -ms-animation-fill-mode: forwards;
  -o-animation-name: slidelogo2;
  -o-animation-duration: 1s;
  -o-animation-delay: 1s;
  -o-animation-fill-mode: forwards;
  animation-name: slidelogo2;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}

.flex a.bttn {
  color:black;
  text-decoration:none;
  -webkit-transition:0.3s all ease;
  transition:0.3s ease all;
}
.flex a.bttn:hover {
    color:#FFF;
  }
.flex a.bttn:active {
  color:#FFF;
}
.bttn {
  font-size:14px;
  letter-spacing:1.4px;
  text-transform:uppercase;
  display:inline-block;
  text-align:center;
  width:120px;
  font-weight:bold;
  padding:8px 0px;
  border:1.5px solid black;
  border-radius:1px;
  position:relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.1);
}
.bttn:before {
  -webkit-transition:0.5s all ease;
  transition:0.5s all ease;
  position:absolute;
  top:0;
  left:50%;
  right:50%;
  bottom:0;
  opacity:0;
  content:'';
  background-color:black;
  z-index:-2;
}
.bttn:hover:before {
  -webkit-transition:0.5s all ease;
  transition:0.5s all ease;
  left:0;
  right:0;
  opacity:1;
}

  .loginpage {
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0% !important;
    margin: 0% !important;
  }
  .shadowlogo {
    width: 300px;
    left: 45%;
    top: 30%;
    position: fixed;
    z-index: 2;
    -webkit-animation-name: slidelogo;
    -webkit-animation-duration: 1s;
    -webkit-animation-delay: 1s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-name: slidelogo;
    -moz-animation-duration: 1s;
    -moz-animation-delay: 1s;
    -moz-animation-fill-mode: forwards;
    -ms-animation-name: slidelogo;
    -ms-animation-duration: 1s;
    -ms-animation-delay: 1s;
    -ms-animation-fill-mode: forwards;
    -o-animation-name: slidelogo;
    -o-animation-duration: 1s;
    -o-animation-delay: 1s;
    -o-animation-fill-mode: forwards;
    animation-name: slidelogo;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  .shadowlogo img {
    width: 100%;
    -webkit-filter: drop-shadow(5px 5px 5px #777);
    filter: drop-shadow(5px 5px 5px #777);
  }
  .logoblade {
    left: 45%;
    top: 30%;
    margin-top: 75px;
    margin-left: 70px;
    position: fixed;
    z-index: 1;
    -webkit-animation-name: slidelogo2;
    -webkit-animation-duration: 1s;
    -webkit-animation-delay: 1s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-name: slidelogo2;
    -moz-animation-duration: 1s;
    -moz-animation-delay: 1s;
    -moz-animation-fill-mode: forwards;
    -ms-animation-name: slidelogo2;
    -ms-animation-duration: 1s;
    -ms-animation-delay: 1s;
    -ms-animation-fill-mode: forwards;
    -o-animation-name: slidelogo2;
    -o-animation-duration: 1s;
    -o-animation-delay: 1s;
    -o-animation-fill-mode: forwards;
    animation-name: slidelogo2;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  .logoblade img {
    width: 150px;
  }
  .backgroundlogin {
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: white;
    text-align: center;
    vertical-align: middle;
  }
@media (max-width: 849px) {
  .shadowlogo {
    width: 300px;
    left: calc(50% - 150px);
    top: 30%;
    -webkit-animation-name: slidelogomedia;
    -webkit-animation-duration: 1s;
    -webkit-animation-delay: 1s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-name: slidelogomedia;
    -moz-animation-duration: 1s;
    -moz-animation-delay: 1s;
    -moz-animation-fill-mode: forwards;
    -ms-animation-name: slidelogomedia;
    -ms-animation-duration: 1s;
    -ms-animation-delay: 1s;
    -ms-animation-fill-mode: forwards;
    -o-animation-name: slidelogomedia;
    -o-animation-duration: 1s;
    -o-animation-delay: 1s;
    -o-animation-fill-mode: forwards;
    animation-name: slidelogomedia;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  .flex {
    min-height:20px;
    display:flex;
    position: fixed;
    align-items:center;
    justify-content:center;
    left: calc(50% - 130px);
    top: calc(30% + 80px);
    margin-left: 70px;
    z-index: 1;
    -webkit-animation-name: slidelogomedia2;
    -webkit-animation-duration: 1s;
    -webkit-animation-delay: 1s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-name: slidelogomedia2;
    -moz-animation-duration: 1s;
    -moz-animation-delay: 1s;
    -moz-animation-fill-mode: forwards;
    -ms-animation-name: slidelogomedia2;
    -ms-animation-duration: 1s;
    -ms-animation-delay: 1s;
    -ms-animation-fill-mode: forwards;
    -o-animation-name: slidelogomedia2;
    -o-animation-duration: 1s;
    -o-animation-delay: 1s;
    -o-animation-fill-mode: forwards;
    animation-name: slidelogomedia2;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .logoblade {
    left: calc(50% - 140px);
    top: 30%;
    margin-top: 75px;
    margin-left: 70px;
    position: fixed;
    z-index: 1;
    -webkit-animation-name: slidelogomedia2;
    -webkit-animation-duration: 1s;
    -webkit-animation-delay: 1s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-name: slidelogomedia2;
    -moz-animation-duration: 1s;
    -moz-animation-delay: 1s;
    -moz-animation-fill-mode: forwards;
    -ms-animation-name: slidelogomedia2;
    -ms-animation-duration: 1s;
    -ms-animation-delay: 1s;
    -ms-animation-fill-mode: forwards;
    -o-animation-name: slidelogomedia2;
    -o-animation-duration: 1s;
    -o-animation-delay: 1s;
    -o-animation-fill-mode: forwards;
    animation-name: slidelogomedia2;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
}

@keyframes slidelogo {
  from {
    margin-left: 0px;
  }

  to {
    margin-left: -120px;
  }
}

@keyframes slidelogomedia {
  from {
    margin-top: 0px;
  }

  to {
    margin-top: -150px;
  }
}

@keyframes slidelogo2 {
  from {
    margin-left: 70px;
    opacity: 0;
  }
  21% {
    opacity: 0;
  }
  22% {
    opacity: 1;
  }
  to {
    margin-left: 180px;
    opacity: 1;
  }
}

@keyframes slidelogomedia2 {
  from {
    margin-top: 0px;
    opacity: 0;
  }
  18% {
    opacity: 0;
  }
  19% {
    opacity: 1;
  }
  to {
    margin-top: 140px;
    opacity: 1;
  }
}
</style>

<template>
  <div class="loginpage">
    <div class="backgroundlogin">
      <div class="shadowlogo">
        <img src="/static/Shadow_Icon_Black.png"/>
      </div>
      <div class="logoblade">
        <img src="static/bladelogo.png"/>
      </div>
      <div class="flex">
        <a href="#0" class="bttn" v-on:click="login()">Connexion</a>
      </div>
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
