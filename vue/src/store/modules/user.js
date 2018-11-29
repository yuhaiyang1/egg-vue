import _ from 'lodash'
const cache = window.localStorage.getItem('userInfo')
const userInfo = !_.isEmpty(cache) ? JSON.parse(cache) : {}
export default {
  state: {
    userInfo,
  },
  mutations: {
    login(state, newUserInfo) {
      state.userInfo = newUserInfo;
      window.localStorage.setItem('userInfo',JSON.stringify(newUserInfo))
    }
  }
}