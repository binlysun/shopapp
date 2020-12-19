import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import state from "./State"
import mutations from "./Mutations"
import actions from "./Actions"

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {}
})