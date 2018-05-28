<template>
  <div>
    <br/><br/>
    <a @click="$router.push('/department/marketing')">
    <v-card class="select-dep">
      <v-card-media
        src="https://www.tanikal.com/wp-content/uploads/2017/11/Digital-Marketing-Media-Technology-Graphic-1024x586.jpg"
        height="200px"
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
        height="200px"
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
        height="200px"
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
        height="200px"
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
        height="200px"
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
        height="200px"
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
        height="200px"
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
        height="200px"
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
        height="200px"
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
        height="200px"
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
<style scoped>
.card {
  display: inline-block;
}
.select-dep {
  width: 400px;
  z-index: 20;
  margin: 15px;
  display: inline-block;
}
.select-dep:hover {
  box-shadow: 5px 5px 4px #888888;
  cursor: pointer;
  -webkit-transition: box-shadow 0.4s;
  transition: box-shadow 0.4s;
}
</style>
<script>
export default {
  name: 'Departments',
  data () {
    return {
    }
  }
}
</script>
