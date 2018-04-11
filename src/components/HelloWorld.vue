<template>
  <div class="page-inner">
    <v-tabs color="blue"
            v-if="$route.fullPath !== '/home'"
            dark
            slider-color="red"
            style="text-align: center;">
      <v-tab ripple style="margin-left: 20%">
        Général
      </v-tab>
      <v-tab v-for="item in department" :key="item.text" ripple>
        {{ item.text }}
      </v-tab>
      <!-- General -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">General</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link" v-if="news.department === 'General'">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <div v-for="news in DiscNews" :key="news._id" style="background-color: rgba(30, 32, 60, 0.9); margin: 5px;">
                  <div class="panel-body">
                      <div class="live-tile" data-mode="flip" data-speed="750" data-delay="3000">
                          <img src="https://vignette.wikia.nocookie.net/central/images/6/60/Discord-logo.png/revision/latest?cb=20170621125902" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                          <div><h2 class="no-m">{{ news.name }}</h2><span>{{ news.text }}</span></div>
                      </div>
                  </div>
              </div><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
        <div class="col-lg-12 col-md-12">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">Project Stats</h4>
                </div>
                <div class="panel-body">
                    <div class="table-responsive project-stats">
                       <table class="table">
                           <thead>
                               <tr>
                                   <th>#</th>
                                   <th>Project</th>
                                   <th>Status</th>
                                   <th>Manager</th>
                                   <th>Progress</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr>
                                   <th scope="row">452</th>
                                   <td>Mailbox Template</td>
                                   <td><span class="label label-info">Pending</span></td>
                                   <td>David Green</td>
                                   <td>
                                   <div class="btn-group">
                            <button type="button" class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                Action <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">327</th>
                                   <td>Wordpress Theme</td>
                                   <td><span class="label label-primary">In Progress</span></td>
                                   <td>Sandra Smith</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">226</th>
                                   <td>Modern Admin Template</td>
                                   <td><span class="label label-success">Finished</span></td>
                                   <td>Chritopher Palmer</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">178</th>
                                   <td>eCommerce template</td>
                                   <td><span class="label label-danger">Canceled</span></td>
                                   <td>Amily Lee</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">157</th>
                                   <td>Website PSD</td>
                                   <td><span class="label label-info">Testing</span></td>
                                   <td>Nick Doe</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">157</th>
                                   <td>Fronted Theme</td>
                                   <td><span class="label label-warning">Waiting</span></td>
                                   <td>David Green</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                           </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </v-tab-item>
      <!-- Test -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">Test</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news._id" v-if="news.department === 'Test' && (news.visibility === true || $store.state.user.local.work)">
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
      <!-- Market -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">Marketing</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link" v-if="news.department === 'Marketing' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <div v-for="news in DiscNews" :key="news._id" style="background-color: rgba(30, 32, 60, 0.9); margin: 5px;">
                  <div class="panel-body">
                      <div class="live-tile" data-mode="flip" data-speed="750" data-delay="3000">
                          <img src="https://vignette.wikia.nocookie.net/central/images/6/60/Discord-logo.png/revision/latest?cb=20170621125902" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                          <div><h2 class="no-m">{{ news.name }}</h2><span>{{ news.text }}</span></div>
                      </div>
                  </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <!-- Support -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">Support</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link" v-if="news.department === 'Support' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="finnish">
              </QwickLook><br/>
              <div v-for="news in DiscNews" :key="news._id" style="background-color: rgba(30, 32, 60, 0.9); margin: 5px;">
                  <div class="panel-body">
                      <div class="live-tile" data-mode="flip" data-speed="750" data-delay="3000">
                          <img src="https://vignette.wikia.nocookie.net/central/images/6/60/Discord-logo.png/revision/latest?cb=20170621125902" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                          <div><h2 class="no-m">{{ news.name }}</h2><span>{{ news.text }}</span></div>
                      </div>
                  </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <!-- Dev -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">Dev</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link" v-if="news.department === 'Dev' && (news.visibility === true || $store.state.user.local.work)">
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
      <!-- Web -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">Web</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link" v-if="news.department === 'Web' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <div v-for="news in DiscNews" :key="news._id" style="background-color: rgba(30, 32, 60, 0.9); margin: 5px;">
                  <div class="panel-body">
                      <div class="live-tile" data-mode="flip" data-speed="750" data-delay="3000">
                          <img src="https://vignette.wikia.nocookie.net/central/images/6/60/Discord-logo.png/revision/latest?cb=20170621125902" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                          <div><h2 class="no-m">{{ news.name }}</h2><span>{{ news.text }}</span></div>
                      </div>
                  </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <!-- Infra -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">Infra</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link"  v-if="news.department === 'Infra' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <!-- RH -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">RH</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link"  v-if="news.department === 'RH' && (news.visibility === true || $store.state.user.local.work)">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card>
                <v-divider></v-divider>
              </a>
            </v-flex>
            <v-flex xs4>
              <div v-for="news in DiscNews" :key="news._id" style="background-color: rgba(30, 32, 60, 0.9); margin: 5px;">
                  <div class="panel-body">
                      <div class="live-tile" data-mode="flip" data-speed="750" data-delay="3000">
                          <img src="https://vignette.wikia.nocookie.net/central/images/6/60/Discord-logo.png/revision/latest?cb=20170621125902" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                          <div><h2 class="no-m">{{ news.name }}</h2><span>{{ news.text }}</span></div>
                      </div>
                  </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <!-- R&D -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">R&D</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link"  v-if="news.department === 'R&D' && (news.visibility === true || $store.state.user.local.work)">
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
      <!-- International -->
      <v-tab-item>
            <div style="text-align: left;" class="page-title">
                <h3>Dashboard</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">International</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card dark color="secondary">
                <v-card-text class="px-0">Annonces<v-btn v-if="$store.state.user.local" flat color="primary" style="position: absolute; right: 10px; bottom: 5px;" @click.native="PostNews = true">Poster</v-btn></v-card-text>
              </v-card>
              <a v-for="news in allNews" :key="news._id" :href="news.link" v-if="news.department === 'International' && (news.visibility === true || $store.state.user.local.work)">
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
        visibility: true,
        sender: ''
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
        { text: 'International' }
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
      this.News.sender = this.$store.state.user.local.username
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
          this.allNews.forEach(function (element) {
            element.link = '/#/annonces/id/' + element._id
          })
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
        }
        /*
        msg3: {
          name: response.data.msgNo1.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.msgNo1.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4')
        }
        */
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
