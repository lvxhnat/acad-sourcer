import React, {useEffect} from 'react'
import axiosInstance from '../../components/auth/apientrypoints'
import {useHistory} from 'react-router-dom'

export default function SignUp() {
  const history = useHistory()

  useEffect(() => {
    axiosInstance.post('/user/logout/blacklist/', {
      refresh_token: localStorage.getItem('heron_refresh_token')
    })
    localStorage.removeItem('heron_access_token')
    localStorage.removeItem('heron_refresh_token')
    axiosInstance.defaults.headers['Authorization'] = null
    setTimeout(() => {
      history.push('/login')
    }, 1500)
  })

  return <div></div>
}
