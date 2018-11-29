import { axios } from 'utils'
export const login = async ( params = {}) => {
  const { name, password } = params
  return await axios('/api/login',
    {  name, password }
  )
}