import React from 'react'
import Grid from '@mui/material/Grid'
import AnalysisBox from '../components/content/analysisbox'

export default function main() {
  return (
    <Grid container>
      <Grid container style={{paddingTop: '1%'}}>
        <Grid item xs={9}>
          <AnalysisBox />
        </Grid>
      </Grid>
    </Grid>
  )
}
