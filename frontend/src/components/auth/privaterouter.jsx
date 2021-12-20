import {React} from 'react'
import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
  // https://stackoverflow.com/questions/65193640/how-to-detect-jwt-token-expire-on-react

  function getPayload(jwt) {
    // A JWT has 3 parts separated by '.' The middle part is a base64 encoded JSON decode the base64
    return atob(jwt.split('.')[1])
  }

  // If acess_token cannot be found, set expiration to current time to force login
  const access_token = localStorage.getItem('heron_access_token')
  const payload = access_token === null ? null : getPayload(access_token)
  const expiration = access_token === null ? new Date() : new Date(1000 * JSON.parse(payload).exp)
  const now = new Date()

  // Set a one minute before expiry time
  const fiveMinutes = 1000 * 60

  return (
    <Route
      {...rest}
      render={props =>
        !(expiration.getTime() - now.getTime() < fiveMinutes) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/Login', state: {from: props.location}}} />
        )
      }
    />
  )
}

export default PrivateRoute
