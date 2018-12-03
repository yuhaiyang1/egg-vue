import { axios } from 'utils'
export const login = async ( params = {}) => {
  const { name, password } = params
  return await axios('/api/login',
    {  name, password }
  )
}
export const logout = async () => {
  return await axios('/api/logout')
}
export const getMovieList = async ( params = {}) => {
  return await axios('/api/movies', params)
}