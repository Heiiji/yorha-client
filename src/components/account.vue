<template>
  <div>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/AccountService'

export default {
  name: 'Login',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addPost () {

    }
  }
}
</script>
