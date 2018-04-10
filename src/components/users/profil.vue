<template>
  <div style="margin-top:-100px;">
    <div class="page-inner">
        <div class="profile-cover">
            <div class="row">
                <div class="col-md-3 profile-image">
                    <div class="profile-image-container">
                        <img :src="user.local.picture" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="main-wrapper">
            <div class="row">
                <div class="col-md-3 user-profile">
                    <h3 class="text-center">{{ user.local.username }}</h3>
                    <p class="text-center">{{ user.local.work }} ({{ user.local.qualifier }})</p>
                    <hr>
                    <p class="text-center">{{ user.local.description }}</p>
                    <hr>
                    <ul class="list-unstyled text-center">
                        <li><p><i class="fa fa-map-marker m-r-xs"></i>Paris, France</p></li>
                        <li><p><i class="fa fa-envelope m-r-xs"></i><a href="#">{{ user.local.mail }}</a></p></li>
                    </ul>
                    <hr>
                    <button class="btn btn-primary btn-block"><i class="fa fa-plus m-r-xs"></i>Add Partner</button>
                    <button @click="EditDescription = true" class="btn btn-primary btn-block">Modify Description</button>
                    <div style="position: relative;">
                      Home Background theme :<br/>
                          <v-select
                            :items="background"
                            v-model="e1"
                            @change="PostHomeTheme"
                            style="display: inline-block; width: 500px;"
                            single-line
                          ></v-select>
                    </div>
                </div>
                <div class="col-md-6 m-t-lg">
                    <div class="panel panel-white">
                        <div class="panel-body">
                            <div class="post">
                                <textarea class="form-control" placeholder="Post" rows="4=6"></textarea>
                                <div class="post-options">
                                    <a href="#"><i class="icon-camera"></i></a>
                                    <a href="#"><i class="icon-link"></i></a>
                                    <button class="btn btn-default pull-right">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="profile-timeline">
                        <ul class="list-unstyled">
                            <li class="timeline-item">
                                <div class="panel panel-white">
                                    <div class="panel-body">
                                        <div class="timeline-item-header">
                                            <img src="/static/assets/images/avatar3.png" alt="">
                                            <p>Christopher palmer <span>Posted a Status</span></p>
                                            <small>5 hours ago</small>
                                        </div>
                                        <div class="timeline-item-post">
                                            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                                            <div class="timeline-options">
                                                <a href="#"><i class="icon-like"></i> Like (7)</a>
                                                <a href="#"><i class="icon-bubble"></i> Comment (2)</a>
                                                <a href="#"><i class="icon-share"></i> Share (3)</a>
                                            </div>
                                            <div class="timeline-comment">
                                                <div class="timeline-comment-header">
                                                    <img src="/static/assets/images/avatar5.png" alt="">
                                                    <p>Nick Doe <small>1 hour ago</small></p>
                                                </div>
                                                <p class="timeline-comment-text">Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                                            </div>
                                            <div class="timeline-comment">
                                                <div class="timeline-comment-header">
                                                    <img src="/static/assets/images/avatar2.png" alt="">
                                                    <p>Sandra Smith <small>3 hours ago</small></p>
                                                </div>
                                                <p class="timeline-comment-text">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                            <textarea class="form-control" placeholder="Replay"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="panel panel-white">
                                    <div class="panel-body">
                                        <div class="timeline-item-header">
                                            <img src="/static/assets/images/avatar2.png" alt="">
                                            <p>Sandra Smith <span>Uploaded Photo</span></p>
                                            <small>2 hours ago</small>
                                        </div>
                                        <div class="timeline-item-post">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                            <img src="/static/assets/images/post-image.jpg" alt="">
                                            <div class="timeline-options">
                                                <a href="#"><i class="icon-like"></i> Like (14)</a>
                                                <a href="#"><i class="icon-bubble"></i> Comment (1)</a>
                                                <a href="#"><i class="icon-share"></i> Share (5)</a>
                                            </div>
                                            <div class="timeline-comment">
                                                <div class="timeline-comment-header">
                                                    <img src="/static/assets/images/avatar5.png" alt="">
                                                    <p>Nick Doe <small>1 hours ago</small></p>
                                                </div>
                                                <p class="timeline-comment-text">Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                                            </div>
                                            <textarea class="form-control" placeholder="Replay"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 m-t-lg">
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Team</div>
                        </div>
                        <div class="panel-body">
                            <div class="team">
                                <div class="team-member">
                                   <div class="online on"></div>
                                    <img src="/static/assets/images/avatar1.png" alt="">
                                </div>
                                <div class="team-member">
                                   <div class="online off"></div>
                                    <img src="/static/assets/images/avatar2.png" alt="">
                                </div>
                                <div class="team-member">
                                   <div class="online on"></div>
                                    <img src="/static/assets/images/avatar3.png" alt="">
                                </div>
                                <div class="team-member">
                                   <div class="online on"></div>
                                    <img src="/static/assets/images/avatar5.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Some Info</div>
                        </div>
                        <div class="panel-body">
                            <p>{{ user.local.description }}</p>
                        </div>
                    </div>
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Skills</div>
                        </div>
                        <div class="panel-body">
                            <p>HTML5</p>
                            <div class="progress progress-xs">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                </div>
                            </div>
                            <p>PHP</p>
                            <div class="progress progress-xs">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                </div>
                            </div>
                            <p>Javascript</p>
                            <div class="progress progress-xs">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
      <v-dialog style="z-index:25;" v-model="EditDescription" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
          <v-card-title style="color: blue;">Nouvelle description :</v-card-title>
          <v-divider></v-divider>
            <v-flex xs8>
              <v-text-field v-model="NewDescription"
                name="Description"
                label="New Description"
                id="Description"
                textarea
                style="width: 990px; margin: 5px;"
              ></v-text-field>
            </v-flex>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="EditDescription = false;">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="PostDescription(NewDescription)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog style="z-index:25;" v-model="EditPicture" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
          <v-card-title style="color: blue;">Nouvelle image de profil :</v-card-title>
          <v-divider></v-divider>
            <v-flex xs8>
              <label>File
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
              </label>
            </v-flex>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="EditPicture = false;">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="changePhoto()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'
import axios from 'axios'

export default {
  name: 'Profil',
  data () {
    return {
      edition: false,
      user: [],
      file: '',
      e1: null,
      EditDescription: null,
      NewDescription: '',
      EditPicture: null,
      NewPicture: '',
      background: [
        { text: 'Landscape' },
        { text: 'Cat' },
        { text: 'Urban' },
        { text: 'forest' },
        { text: 'abstract' }
      ]
    }
  },
  mounted () {
    this.user = this.$store.state.user
    this.e1 = this.user.local.homeTheme
    console.log(this.user)
  },
  methods: {
    PostDescription (desc) {
      AccountService.editDescription({
        description: desc,
        mail: this.user.local.mail
      })
      this.user.local.description = desc
      this.EditDescription = false
    },
    async PostHomeTheme (event) {
      console.log(event.text)
      AccountService.editHomeTheme({
        newTheme: event.text,
        mail: this.user.local.mail
      })
      this.$store.state.user.local.homeTheme = event.text
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    },
    changePhoto () {
      let formData = new FormData()
      formData.append('file', this.file)
      formData.append('username', this.user.local.username)
      formData.append('mail', this.user.email)
      console.log(formData.get('file'))
      axios.post('http://localhost:8081/account/photo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('SUCCESS!!')
      })
        .catch(function (error) {
          console.log('FAILURE : ' + error)
        })
    }
  }
}
</script>

<style type="text/css">
#photo {
  float: left;
  margin: 25px;
}
#editer {
  opacity: 0;
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  display: inline-block;
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: rgba(200, 200, 200, 0);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
#photo:hover #editer {
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  opacity: 1;
  background-color: rgba(200, 200, 200, 0.7);
}
</style>
