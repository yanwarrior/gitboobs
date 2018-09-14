<template>
  <div v-if="repos">
    <van-collapse v-for="(repo, index) in repos" :key='index' v-model="activeNames">
      <van-collapse-item :name="index">
        <div slot="title">
          {{repo.name}} <van-tag v-if="repo.language" plain type="primary">{{ repo.language }}</van-tag>
        </div>
        {{ repo.description }} 
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: 'Repositories',
  data() {
    return {
      activeNames: ['1']
    }
  },
  computed: {
    repos() {
      return this.$store.getters.getRepos
    }
  },
  mounted() {
    this.$store.dispatch('actionSetRepos')
  }
}
</script>
