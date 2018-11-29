import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.response.use(config => {
  const { data, status } = config
  if (status && status === 200) {
    const { success, response } = data
    if (success) {
      return response
    } else {
      return null
    }
  }
  return config
}, err => {
  console.log(err)
  // message.error('发生了未知错误')
  Promise.reject(err)
})
export default (api, reqData, type='post' ) => {
  return axios({
    method: type,
    withCredentials: true,
    responseType: 'json',
    // headers: {
    //   'Content-Type': header
    // },
    url: api,
    params: {
      ...reqData
    }
  })
}

