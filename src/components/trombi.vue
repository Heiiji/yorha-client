<style scoped>
.trombi {
 margin-left: 1%;
}
.page-title {
  text-align: left;
  position: relative;
  width: 100%;
  padding-bottom: 80px;
  margin-bottom: -80px;
  z-index: 1;
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
</style>
<template>
  <div>
    <div style="" class="page-title">
        <h3>Trombinoscope</h3>
    </div>
    <br/>
    <div class="trombi">
      <div v-for="(user, i) in users" :key="i" class="userspace">
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
    async getUsers (arg) {
      const response = await AccountService.FindUsers('all')
      this.users = response.data.users.sort(function (a, b) {
        if (a.username > b.username) {
          return 1
        } else {
          return -1
        }
      })
    },
    ChangeStatus (id, newStatus) {
      this.modif.id = id
      this.modif.status = newStatus
      AccountService.ChangeStatus(this.modif)
    }
  }
}
</script>
