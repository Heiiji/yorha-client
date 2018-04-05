<template>
  <div>
    <v-tabs color="blue"
            v-if="$route.fullPath !== '/home'"
            dark
            slider-color="red"
            style="text-align: center;">
      <label style="color: white; font-size: 1.5em; padding-top: 10px; padding-left: 10px;" >Department </label>
      <v-tab ripple style="margin-left: 15%">
        Général
      </v-tab>
      <v-tab v-for="item in department" :key="item.text" ripple>
        {{ item.text }}
      </v-tab>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link" v-if="news.department === 'General'">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
              <v-card style="margin-top: 15px;" dark color="secondary">
                <v-card-text class="px-0">Social Actu</v-card-text>
              </v-card>
              <h3 style="color: blue;">Discord</h3>
              <span v-for="news in DiscNews" :key="news.title">
                <v-card dark style="color: black; text-align: left; padding: 20px; background-color: rgba(24, 25, 28, 0.9); color: white;">
                  <v-card-text class="px-0"><strong>{{ news.name }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </span>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link" v-if="news.department === 'Test' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link" v-if="news.department === 'Marketing' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
              <v-card style="margin-top: 15px;" dark color="secondary">
                <v-card-text class="px-0">Social Actu</v-card-text>
              </v-card>
              <h3 style="color: blue;">Discord</h3>
              <span v-for="news in DiscNews" :key="news.title">
                <v-card dark style="color: black; text-align: left; padding: 20px; background-color: rgba(24, 25, 28, 0.9); color: white;">
                  <v-card-text class="px-0"><strong>{{ news.name }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </span>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link" v-if="news.department === 'Support' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
              <v-card style="margin-top: 15px;" dark color="secondary">
                <v-card-text class="px-0">Social Actu</v-card-text>
              </v-card>
              <h3 style="color: blue;">Discord</h3>
              <span v-for="news in DiscNews" :key="news.title">
                <v-card dark style="color: black; text-align: left; padding: 20px; background-color: rgba(24, 25, 28, 0.9); color: white;">
                  <v-card-text class="px-0"><strong>{{ news.name }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </span>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link" v-if="news.department === 'Dev' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link" v-if="news.department === 'Web' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link"  v-if="news.department === 'Infra' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link"  v-if="news.department === 'RH' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link"  v-if="news.department === 'R&D' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link" v-if="news.department === 'International' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Actu<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news.title" target="_blank" :href="news.link"  v-if="news.department === 'US' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="current">
              </QwickLook><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs>

  <v-dialog style="z-index:25;" v-model="PostNews" scrollable max-width="1000px">
    <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
      <v-card-title style="color: blue;">News :</v-card-title>
      <v-text-field v-model="News.title"
        name="title"
        label="title"
        id="title"
        style="width: 990px; margin: 5px;"
      ></v-text-field><br/>
      <v-divider></v-divider>
      <v-text-field v-model="News.link"
        name="link"
        label="target url"
        id="link"
        style="width: 990px; margin: 5px;"
      ></v-text-field><br/>
      <v-divider></v-divider>
        <v-flex xs8>
          <v-text-field v-model="News.text"
              name="News"
              label="Text"
              textarea
              style="width: 990px; margin: 5px;"
            ></v-text-field>
        </v-flex>
      <v-divider></v-divider>
      Focus :
      <v-flex xs3>
          <v-select
            :items="department"
            v-model="e1"
            label="General"
            single-line
          ></v-select>
        </v-flex>
        <br/>
        <v-switch
          :label="`Public visibility: ${News.visibility.toString()}`"
          v-model="News.visibility"
        ></v-switch>
        <br/><br/>
      <v-card-actions>
        <v-btn color="blue darken-1" flat @click.native="PostNews = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="postNews()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
import VersionService from '@/services/VersionService'
import QwickLook from '@/components/versions/WorkingDisplay.vue'
import News from '@/services/NewsService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      versions: [],
      passed: [],
      e1: 'General',
      PostNews: null,
      News: {
        text: '',
        title: '',
        link: '',
        department: 'General',
        visibility: true
      },
      department: [
        { text: 'Test' },
        { text: 'Marketing' },
        { text: 'Support' },
        { text: 'Dev' },
        { text: 'Web' },
        { text: 'Infra' },
        { text: 'RH' },
        { text: 'R&D' },
        { text: 'International' },
        { text: 'US' }
      ],
      allNews: [],
      DiscNews: [],
      target: 'current'
    }
  },
  mounted () {
    this.getVersion()
    this.getNews()
  },
  components: {
    QwickLook
  },
  methods: {
    async getVersion () {
      const response = await VersionService.fetchPosts('current')
      this.versions = response.data.versions
      const responses = await VersionService.fetchPosts('finnish')
      this.passed = responses.data.versions
    },
    async postNews () {
      this.News.department = this.e1.text
      News.Post(this.News)
      this.getNews()
      this.PostNews = false
      this.$router.push('/home')
    },
    async getNews () {
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          this.allNews = response.data.news
        }
      }
      this.DiscNews = {
        msg1: {
          name: response.data.msgNo3.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.msgNo3.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4')
        },
        msg2: {
          name: response.data.msgNo2.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.msgNo2.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4')
        },
        msg3: {
          name: response.data.msgNo1.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.msgNo1.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4')
        }
      }
    }
  }
}
</script>

<style scoped>
.GO {
  color: green;
}
.NOGO {
  color: red;
}
.WIP {
  color: blue;
}
.newsFeed{
  display: block;
  position: relative;
  width: 90%;
  padding: 5%;
  margin: 5%;
  margin-top: 0px;
  padding-top: 0px;
}
.news{
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
  width: 100%;
  box-shadow: 1px 1px 12px #555;
  padding: 10px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
