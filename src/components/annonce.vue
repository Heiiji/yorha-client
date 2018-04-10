<template>
  <div>
    <div style="background-color: rgba(200, 200, 200, 0.2); min-height: 100%; width: 75%; margin-left: 12.5%; padding: 20px;">
      <br/>
      <img :src="user.picture" style="float: right; width: 200px; margin: 15px;" />
      <h2 style="text-align:center; padding: 5px;">{{ annonce.title }}</h2>
      <h4 style="text-align:center; padding: 10px;">{{ annonce.department }}</h4>
      <h3>Annonce : </h3>
      <p>{{ annonce.text }}</p>
    </div><br/>
    <div class="text-xs-center">
      <v-flex style="display: inline-block; width: 70%;">
        <v-card dark style="color: black; text-align: left; padding: 20px; background-color: rgba(24, 25, 28, 0.9); color: white;">
          <v-card-text class="px-0"><strong>test :</strong> commentaire</v-card-text>
        </v-card>
      </v-flex>
    </div>
    <br/>
    <v-form class="commentaire" v-model="valid" ref="form" lazy-validation>
    <h2>Répondre :</h2>
    <v-text-field
      label="reponse"
      v-model="reponse"
      required
    ></v-text-field>

    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </div>
</template>
<script>
import NewsService from '@/services/NewsService'
import AccountService from '@/services/AccountService'

export default {
  name: 'Displayer',
  data () {
    return {
      annonce: [],
      user: [],
      reponse: ''
    }
  },
  mounted () {
    this.getAnnonce(this.$route.params.id)
  },
  methods: {
    async getAnnonce (id) {
      const response = await NewsService.GetById(id)
      this.annonce = response.data.news
      const response2 = await AccountService.FindById(this.annonce.sender)
      if (response2.data.user) {
        this.user = response2.data.user
      }
    }
  }
}
</script>
<style>
.commentaire {
  width: 70%;
  padding: 20px;
  margin-left: 15%;
  background-color: rgba(100, 100, 120, 0.4);
  text-align: center;
}
</style>
