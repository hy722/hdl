import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:""
  },
  mutations: {
    updateUserName(state,name){
      state.userName=name;
    }
  },
  getters:{
    getUserName(state){
      return state.userName;
    }
  },
  actions: {
  },
  modules: {
  }
})
