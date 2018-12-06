import _ from 'lodash'
const cache = window.localStorage.getItem('userInfo')
console.log(cache === 'undefined',  '11')
const userInfo = !_.isEmpty(cache) && cache !== 'undefined' ? JSON.parse(cache) : {}
export default {
  state: {
    userInfo,
  },
  mutations: {
    login (state, newUserInfo) {
      state.userInfo = newUserInfo;
      window.localStorage.setItem('userInfo',JSON.stringify(newUserInfo))
    },
    logout (state) {
      console.log('登出')
      state.userInfo = {}
      window.localStorage.removeItem('userInfo')
    }
  }
}