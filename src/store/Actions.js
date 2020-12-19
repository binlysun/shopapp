import { SAVE_USER_INFO } from './Mutations-type'
import { getStore } from './../config/localStorage'

export default {
    saveUserInfo({ commit }, userInfo) {

        commit(SAVE_USER_INFO, { userInfo })
    },

    autoLogin({ commit }) {
        let userInfo = JSON.parse(getStore('userInfo'))
        commit(SAVE_USER_INFO, { userInfo })
    }
}