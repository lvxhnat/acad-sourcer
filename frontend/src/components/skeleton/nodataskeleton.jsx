import React from 'react'
import Grid from '@mui/material/Grid'

export default function NoDataSkeleton(props) {
  const nodatastyles = {
    backgroundColor: '#efeded',
    minHeight: '200px',
    height: props.height !== undefined && props.height !== null ? props.height : '100%',
    fontSize: props.fontSize !== undefined && props.fontSize !== null ? props.fontSize : '2vw',
    color: 'grey',
    textAlign: 'center'
  }
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        align="center"
        direction="column"
        style={nodatastyles}>
        No Data Available
      </Grid>
    </React.Fragment>
  )
}
