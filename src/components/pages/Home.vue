<template>
  <div>

    <van-cell-group>
      <van-search v-on:search="search" placeholder="Username, ex: yanwarsolah" v-model="username" />
    </van-cell-group>

    <van-cell-group>
      <van-notice-bar @click="closeNotif" v-if="error" mode="closeable">{{ error }}</van-notice-bar>
    </van-cell-group>

    <van-cell-group v-if="user">
      <van-card :title="user.name" :thumb="user.avatar_url">
        <div slot="desc" class="van-card__desc">
          {{ user.bio }}
        </div>
      </van-card>
    </van-cell-group>

  </div>
</template>

<script>
import GithubService from '@/services/GithubService'

export default {
  name: 'Home',
  
  data() {
    return {
      username: 'yanwarsolah'
    }
  },
  
  methods: {
    search() {
      this.$store.dispatch('actionSetUser', {username: this.username})
      this.username = ''
    },
    closeNotif() {
      this.$store.dispatch('resetError', null)
    }
  },
  
  computed: {
    user() {
      return this.$store.getters.getUser
    },
    error() {
      return this.$store.getters.getError
    }
  },
  mounted() {
    this.$store.dispatch('actionSetUser', {username: this.username})
    this.username = ''
  }
}
</script>

