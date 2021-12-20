import React from 'react'
import Grid from '@mui/material/Grid'

import NavButton from './components/navbutton'
import moment from 'moment-timezone'
import {Link} from 'react-router-dom'

function Time() {
  const [time, setTime] = React.useState(
    moment.tz(new Date(), 'America/New_York').format('D MMM YY HH:mm:ss')
  )

  React.useEffect(() => {
    setInterval(() => {
      setTime(moment.tz(new Date(), 'America/New_York').format('D MMM YY HH:mm:ss'))
    }, 1000)
  }, [])

  return <span>New York, NY, USA: {time} </span>
}

export default function NavBar() {
  return (
    <React.Fragment>
      <Grid container spacing={0} direction="row" alignItems="center" style={{textAlign: 'center'}}>
        <Grid item xs={1}>
          <Link to={{pathname: '/'}} style={{textDecoration: 'none'}}>
            <NavButton menuname={'HOME'} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to={{pathname: '/research'}} style={{textDecoration: 'none'}}>
            <NavButton menuname={'RESEARCH'} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <NavButton menuname={'PORTFOLIO'} menuitems={['Overview', 'Equity']} />
        </Grid>
        <Grid item xs={1}>
          <NavButton
            menuname={'ABOUT'}
            menuitems={['Pilot', 'Asset Methodologies', 'Portfolio Methodologies']}
            menulinks={['/aboutpilot']}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3} style={{float: 'right'}}>
          {Time()}
        </Grid>
        <Grid item xs={1}>
          <Link to={{pathname: '/logout'}} style={{textDecoration: 'none'}}>
            <NavButton menuname={'LOGOUT'} />
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
