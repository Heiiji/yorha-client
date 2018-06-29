<style scoped>
.card {
  display: inline-block;
  box-shadow: none;
  opacity: 0.82;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
.card:hover {
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
.card div {
  box-shadow: none;
  text-align: center;
  margin: auto;
}
.select-dep {
  margin-left: -1.2px;
  margin-right: -2px;
  border: none;
  border-radius: 0px;
  width: 25%;
  min-width: 320px;
  z-index: 20;
  display: inline-block;
}
@media (max-width: 1600px) {
  .select-dep {
    width: 33.33%;
  }
}
@media (max-width: 1391px) {
  .select-dep {
    width: 50%;
  }
}
@media (max-width: 900px) {
  .select-dep {
    width: 70%;
  }
  .containerdep {
    text-align: center;
  }
}
.select-dep:hover {
  cursor: pointer;
}
.page-inner_dark_color div, .page-inner_dark_normal div {
  background-color: #333333 !important;
  color: white !important;
}
.page-inner_dark_color, .page-inner_dark_normal {
  background-color: #333333 !important;
}
.page-inner_clair_color, .page-inner_clair_normal {
  background-color: white !important;
}
</style>
<template>
  <div class="containerdep" :class="'page-inner_' + $store.state.user.local.theme" style="min-height:951px !important">
    <a @click="$router.push('/department/marketing')">
    <v-card class="select-dep">
      <v-card-media
        src="https://www.tanikal.com/wp-content/uploads/2017/11/Digital-Marketing-Media-Technology-Graphic-1024x586.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Le Marketing</div>
          <span class="grey--text">Money Money !!</span>
        </div>
      </v-card-title>
    </v-card>
  </a>
  <a @click="$router.push('/department/Support')">
    <v-card class="select-dep">
      <v-card-media
        src="https://geekyapar.com/wp-content/uploads/2014/04/green-lantern-batman-dark-dc-comics-comics-superman-superheroes-justice-league-aquaman-flash-comic-hero-wonder-woman-cyborg-dc-comics-69099.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Le Support</div>
          <span class="grey--text">You have a problem, we've got the solution</span>
        </div>
      </v-card-title>
    </v-card>
  </a>
    <a @click="$router.push('/department/Dev')">
    <v-card class="select-dep">
      <v-card-media
        src="http://tradinginsider.fr/wp-content/uploads/2017/02/langages-programmation.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Les Dev</div>
          <span class="grey--text">Domain where all thing are possible</span>
        </div>
      </v-card-title>
    </v-card>
  </a>
    <a @click="$router.push('/department/test')">
    <v-card class="select-dep">
      <v-card-media
        src="https://www.desktopbackground.org/p/2014/04/22/750944_free-thor-hammer-wallpapers-for-iphone-y2j-wallx_1600x1200_h.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Le Test</div>
          <span class="grey--text">Version should not pass !</span>
        </div>
      </v-card-title>
    </v-card>
  </a>
    <a @click="$router.push('/department/web')">
    <v-card class="select-dep">
      <v-card-media
        src="/static/departments/Web-wide.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Le Web</div>
          <span class="grey--text">Internet dominate the world, we are internet</span>
        </div>
      </v-card-title>
    </v-card>
  </a>
    <a @click="$router.push('/department/infra')">
    <v-card class="select-dep">
      <v-card-media
        src="/static/departments/infra-wide.png"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">L'infra</div>
          <span class="grey--text">We order in the shade, we are structure for the world</span>
        </div>
      </v-card-title>
    </v-card>
  </a>
    <a @click="$router.push('/department/R&D')">
    <v-card class="select-dep">
      <v-card-media
        src="http://smkn2kra.sch.id/wp-content/uploads/2015/02/computer-wallpaper-background-21-high-quality-background-and-wallpaper-1-1024x640.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">R&D</div>
          <span class="grey--text">Research and disasters</span>
        </div>
      </v-card-title>
    </v-card>
  </a>
    <a @click="$router.push('/department/RH')">
    <v-card class="select-dep">
      <v-card-media
        src="http://blog.prodware.es/wp-content/uploads/2012/05/PLM-y-social-media11.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">RH</div>
          <span class="grey--text">center of social, just indispensable </span>
        </div>
      </v-card-title>
    </v-card>
  </a>
    <a @click="$router.push('/department/LIMA')">
    <v-card class="select-dep">
      <v-card-media
        src="http://www.gotechnologix.com/wp-content/uploads/2016/05/mobile-device-technology-wallpaper.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">LIMA</div>
          <span class="grey--text">Your file around the world </span>
        </div>
      </v-card-title>
    </v-card>
  </a>
    <a @click="$router.push('/department/Administration')">
    <v-card class="select-dep">
      <v-card-media
        src="https://www.dorchesterwealth.com/wp-content/themes/silvio/images/investment-management_bg.jpg"
        height="260px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Administration</div>
          <span class="grey--text">We command all of you</span>
        </div>
      </v-card-title>
    </v-card>
  </a>
  </div>
</template>
<script>
export default {
  name: 'Departments',
  data () {
    return {
    }
  }
}
</script>
