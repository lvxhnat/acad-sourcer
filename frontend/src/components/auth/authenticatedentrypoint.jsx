import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

const VerifiedAxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('heron_access_token')}`,
    'x-access-token': `${localStorage.getItem('heron_access_token')}`
  }
})
export default VerifiedAxiosInstance
