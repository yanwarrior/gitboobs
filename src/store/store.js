import Vue from 'vue'
import Vuex from 'vuex'
import GithubService from '@/services/GithubService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    user: null,
    repos: [],
    followers: [],
    error: null
  },
  getters: {
    getUser: (state) => {
      return state.user
    },
    getError: (state) => {
      return state.error
    },
    getRepos: (state) => {
      return state.repos
    },
    getFollowers: (state) => {
      return state.followers
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setRepos(state, payload) {
      state.repos = payload
    },
    setFollowers(state, payload) {
      state.followers = payload
    }
  },
  actions: {
    actionSetUser(context, payload) {
      let service = new GithubService()
      service.getProfile(payload.username)
        .then(resp => {
          if (resp.status === 200) {
            context.commit('setError', null)
            context.commit('setUser', resp.data);
          } else {
            context.commit('setUser', null);
            context.commit('setError', resp.data.message)
          }
        })
    },

    resetError (context, payload) {
      context.commit('setError', payload)
    },

    actionSetRepos (context) {
      let service = new GithubService()
      if (context.state.user) {
        service.getRepos(context.state.user.login)
               .then(resp => {
                  if (resp.status === 200) {
                    context.commit('setRepos', resp.data)
                  }
               })
      }
    },

    actionSetFollowers (context) {
      let service = new GithubService()
      if (context.state.user) {
          service.getFollowers(context.state.user.login)
                 .then(resp => {
                    if (resp.status === 200) {
                      context.commit('setFollowers', resp.data)
                    }
                 })
      }
    }
  }
})