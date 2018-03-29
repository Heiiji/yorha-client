<template>
  <div :style="dynamicStyle">
    <img :src="image" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" />
    <div class="clock">
      <p class="date">{{ date }}</p>
      <p class="time">{{ time }}</p>
    </div>
  </div>
</template>
<style>
.hour {
  z-index: 19;
  font-size: 8em;
  position: relative;
  top: 40%;
}
p {
  margin: 0;
  padding: 0;
}
.clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  bottom: 1%;
  left: 15%;
  background-color: rgba(50,50,50, 0.3);
  padding: 30px;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
}
.time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}
.date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
.text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}
</style>
<script>
import Unsplash from 'unsplash-js'

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
// var timerID = setInterval(this.updateTime(), 1000)

const unsplash = new Unsplash({
  applicationId: '25fbeb2d337432387b3d4d69dbdbcc5e56410a5df9b6f017a0be08495462c84a',
  secret: '375226c605916b148c1b83c61474fca95ca5d1078447195f709f9e5280773715',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
})

export default {
  data: () => ({
    image: '',
    time: '',
    date: ''
  }),
  methods: {
    updateTime () {
      var cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2)
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  },
  computed: {
    dynamicStyle () {
      return {
        'text-align': 'center;',
        'margin-top': '-83px;',
        'z-index': '18;',
        'background-image': 'url(\'' + this.image + '\')'
      }
    }
  },
  mounted () {
    this.updateTime()
    var query = 'city'
    if (this.$store.state.user) {
      if (this.$store.state.user.local) {
        console.log('personnalise theme')
        query = this.$store.state.user.local.homeTheme
      }
    }
    unsplash.photos.getRandomPhoto({width: 2560, height: 1380, query: query}).then((response) => {
      response.json().then((lots) => {
        this.image = lots.urls.custom
      })
    })
    window.setInterval(() => {
      this.updateTime()
    }, 500)
  }
}
</script>
