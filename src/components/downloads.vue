<template>
  <div >
  <br/>
    <h1>Version download</h1>
    <br/><br/>
    <v-card style="width: 500px; z-index: 20; margin: 20px; display: inline-block;">
      <v-card-media
        src="https://img2.goodfon.ru/original/2560x1600/b/da/maykrosoft-microsoft-windows.jpg"
        height="200px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Windows Client <strong>0.22.76</strong></div>
          <span class="grey--text">ready to test</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat>Download</v-btn>
        <v-btn flat color="purple" >Upload new</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-card style="width: 500px; z-index: 20; margin: 20px; display: inline-block;">
      <v-card-media
        src="http://hdd1.service-webmaster.fr/media/reel/informatique/apple/00009744.jpg"
        height="200px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">MacOS Client <strong>0.22.76</strong></div>
          <span class="grey--text">ready to test</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat>Download</v-btn>
        <v-btn flat color="purple" >Upload new</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Downloads'
}
</script>

<style type="text/css">

</style>
