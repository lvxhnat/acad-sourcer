import React, { useState } from 'react'

import Grid from '@mui/material/Grid'

import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton';

import researchStyles from '../../../styles/research.module.css'
import MultiLineChart from '../../charting/linecharts/multiline'

export default function DocumentsOverTime(props) {
  const [percentagetype, setPercentagetype] = useState(false) // true means percentage selection is true

  const startstate = props.startstate
  const width = props.width
  const height = props.height
  const loadingstate = props.loading
  const multilinechartdata = props.multilinechartdata

  const activebutton = {
    backgroundColor: '#d4d4d4',
    fontSize: '0.8vw',
    color: 'black',
    border: '1px solid grey'
  }
  const inactivebutton = { fontSize: '0.8vw', border: '1px solid grey', color: 'grey' }

  function manipulatecatovertime(data_) {
    var offset = 0
    var pctdata = data_.map(data_ => ({ ...data_ })) // duplicate array
    if (percentagetype) {
      pctdata.map(items => {
        var entry = 0
        Object.entries(items).map(([a, b]) => {
          if (a !== 'year') {
            entry += b
          } else {
          }
        })
        var newobjectentry = new Object()
        Object.entries(items).map(([a, b]) => {
          if (a !== 'year') {
            var pct = Math.round((b / entry) * 100 * 100) / 100
            var pct = !isNaN(pct) ? pct : 0
            newobjectentry[a] = pct
          } else {
            newobjectentry[a] = b
          }
        })
        pctdata[offset] = newobjectentry
        offset += 1
      })
      return pctdata
    } else {
    }
    return data_
  }

  return (
    <React.Fragment>
      <Grid container style={{ minHeight: '100px' }}>
        <Grid
          container
          justifyContent="right"
          align="right"
          direction="row"
          style={{ paddingBottom: '3%', paddingTop: '3%' }}>
          <Grid item xs={6} align="left" style={{ fontSize: '1vw', color: 'grey' }}>
            Documents Created Over Time
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button
                onClick={e => setPercentagetype(false)}
                style={!percentagetype ? activebutton : inactivebutton}
                className={researchStyles.chartvaluebutton}>
                {' '}
                ABS{' '}
              </Button>
              <Button
                onClick={e => setPercentagetype(true)}
                style={percentagetype ? activebutton : inactivebutton}
                className={researchStyles.chartvaluebutton}>
                {' '}
                PCT (%){' '}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        {loadingstate && !startstate ?
          <Grid container>
            <Skeleton animation="wave" style={{ minHeight: '350px', marginTop: '-12%', marginBottom: '-12%', minWidth: '100%' }} />
          </Grid> :
          <Grid
            container
            style={
              multilinechartdata !== null && multilinechartdata !== undefined
                ? { minHeight: '250px' }
                : { minHeight: '200px' }
            }>
            <MultiLineChart
              startstate={startstate}
              xaxisname={'year'}
              dot={false}
              loadingstate={loadingstate}
              percentagetype={percentagetype}
              data={
                multilinechartdata !== null && multilinechartdata !== undefined
                  ? manipulatecatovertime(multilinechartdata)
                  : multilinechartdata
              }
              width={width}
              height={height}
            />
          </Grid>}
      </Grid>
    </React.Fragment>
  )
}
