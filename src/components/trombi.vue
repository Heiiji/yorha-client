<style scoped>
.trombi {
 margin-left: 1%;
}
@media (max-width: 849px) {
  .trombi {
    text-align: center;
  }
}
.page-title {
  text-align: left;
  position: relative;
  width: 100%;
  padding-bottom: 80px;
  margin-bottom: -80px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
  border: none;
}
.userspace {
  position: relative;
  margin: 10px;
  width: 200px;
  height: 200px !important;
  background-color: rgb(250, 250, 250, 0)!important;
  color: black!important;
  z-index: 2;
  border-radius: 100px;
  text-align: center;
  box-shadow: 0px 4px 5px #CCC;
  -webkit-transition: box-shadow 0.2s, -webkit-transform 0.2s, ease-in-out;
  transition: box-shadow 0.2s, transform 0.2s, ease-in-out;
  overflow: hidden;
  display: inline-block;
}
.userspace:hover {
  cursor: pointer;
  box-shadow: 0px 6px 14px #999;
  -webkit-transition: box-shadow 0.2s, -webkit-transform 0.2s, ease-in-out;
  transition: box-shadow 0.2s, transform 0.2s, ease-in-out;
}
.photouser {
  margin-top: -200px;
}
.photouser img {
  position: relative;
  z-index: 3;
  border-radius: 100px;
}
.nameuser {
  position: relative;
  z-index: 4;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  text-align: center;
}
.usertxt {
  bottom: 0px;
  position:absolute;
  text-align: center;
  font-size: 18px;
  color: white;
  width: 200px;
  padding-bottom: 5px;
  background-color: rgba(205, 205, 205, 0.35);
}
.usertxt span {
  display: block;
  margin-left: 50px;
  width: 100px;
  white-space: initial;
  word-wrap: break-word
}
.page-inner_dark_color, .page-inner_dark_normal {
  background-color: #333333 !important;
}
.page-title_dark_color h3, .page-title_clair_color h3 {
  color: rgb(255, 67, 175) !important;
}
.page-title_dark_normal h3 {
  color: white !important;
}
.userspace_dark_normal, .userspace_dark_color {
  box-shadow: 0px 4px 5px #222;
}
.userspace_dark_normal:hover, .userspace_dark_color:hover {
  box-shadow: 0px 6px 14px #111;
}
</style>
<template>
  <div :class="'page-inner_' + $store.state.user.local.theme" style="min-height:951px !important">
    <div class="page-title" :class="'page-title_' + $store.state.user.local.theme">
        <h3>Trombinoscope</h3>
    </div>
    <div>
      <v-btn @click="sortByAlphabet(); SortBy = 'alphabet'" style="z-index: 5;" small>Sort by alphabet</v-btn>
      <v-btn @click="sortByDepartment(); SortBy = 'department'" style="z-index: 5;" small>Sort by department</v-btn>
      <v-btn @click="sortByLocation(); SortBy = 'location'" style="z-index: 5;" small>Sort by location</v-btn>
    </div>
    <br/>
    <div class="trombi">
      <div v-for="(user, i) in users" :key="i" class="userspace" :class="'userspace_' + $store.state.user.local.theme">
        <div :src="user.picture" @click="$router.push('/profil/' + user._id)">
          <div class="nameuser">
            <div class="usertxt"><span>{{ user.username }}</span></div>
          </div>
          <div class="photouser">
            <img width="200" height="200" :src="user.picture" @click="$router.push('/profil/' + user._id)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'Trombi',
  data () {
    return {
      edition: false,
      users: [],
      SortBy: 'alphabet',
      modif: {
        id: '',
        status: ''
      },
      rangs: [
        { text: 'Test' },
        { text: 'Marketing' },
        { text: 'Support' },
        { text: 'Dev' },
        { text: 'Web' },
        { text: 'Infra' },
        { text: 'RH' },
        { text: 'R&D' },
        { text: 'International' },
        { text: 'LIMA' }
      ]
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsersByStatus (arg) {
      const response = await AccountService.FindByStatus(arg)
      this.users = response.data.users
    },
    async sortByAlphabet () {
      this.users = this.users.sort(function (a, b) {
        if (a.username > b.username) {
          return 1
        } else {
          return -1
        }
      })
    },
    async sortByDepartment () {
      this.users = this.users.sort(function (a, b) {
        if (a.work > b.work) {
          return 1
        } else {
          return -1
        }
      })
    },
    async sortByLocation () {
      this.users = this.users.sort(function (a, b) {
        if (a.location > b.location) {
          return 1
        } else {
          return -1
        }
      })
    },
    async getUsers (arg) {
      const response = await AccountService.FindUsers('all')
      this.users = response.data.users.sort(function (a, b) {
        if (a.username > b.username) {
          return 1
        } else {
          return -1
        }
      })
    }
  }
}
</script>
