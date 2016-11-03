import Vuex from 'vuex'
import Vue from 'vue'
import * as at from './action-types'
import * as mt from './mutation-types'
import getGIFs from '../lib/get-gifs'

Vue.use(Vuex)

const state = {
  keyword: '',
  gifs: [],
  nowLoading: false
}

const getters = {}

const mutations = {
  [mt.CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },

  [mt.SEARCH_START] (state) {
    state.nowLoading = true
    state.gifs = []
  },

  [mt.SEARCH_SUCCESS] (state, gifs) {
    state.nowLoading = false
    state.gifs = gifs
  }
}

const actions = {
  [at.CHANGE_KEYWORD] ({ commit }, keyword) {
    commit(mt.CHANGE_KEYWORD, keyword)
  },

  [at.SEARCH] ({ commit, state }) {
    commit(mt.SEARCH_START)
    getGIFs(state.keyword).then(res => {
      commit(mt.SEARCH_SUCCESS, res.data)
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
