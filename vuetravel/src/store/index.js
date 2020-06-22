import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: localStorage.city || '北京'
  },
  actions: {
    changecity (ctx, city) {
      ctx.commit('change', city)
    }
  },
  mutations: {
    change (state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})
