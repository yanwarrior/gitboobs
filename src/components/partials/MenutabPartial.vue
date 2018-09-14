<template>
  <div v-if="user">
    <van-tabbar v-model="show">
      <van-tabbar-item to="/" icon="home">Home</van-tabbar-item>
      <van-tabbar-item to="/followers" icon="contact" :info="user.followers">Followers</van-tabbar-item>
      <van-tabbar-item to="/repositories" icon="shop" :info="user.public_repos">Repositories</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MenutabPartial',

  data() {
    return {
      show: 0,
    }
  },

  computed: {
    user() {
      return this.$store.getters.getUser
    }
  }

  
}
</script>

