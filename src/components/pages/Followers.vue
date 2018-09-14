<template>
  <div v-if="followers">
    <van-cell-group v-for="(follower, index) in followers" :key="index">
      <van-card :title="follower.login" :thumb="follower.avatar_url">
      </van-card>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: 'Followers',
    computed: {
      followers() {
        return this.$store.getters.getFollowers
      }
    },
    mounted() {
      this.$store.dispatch('actionSetFollowers')
    }
  }
</script>