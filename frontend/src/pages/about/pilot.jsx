import React from 'react'
import StyledLink from '../../components/nav/stylelink'
import Grid from '@mui/material/Grid'
import Pilot from '../../static/pilot.jpeg'

export default function AboutPilot() {
  // What are the main features of this over JSTOR? https://www.jstor.org/action/doBasicSearch?Query=test&so=rel

  return (
    <Grid container style={{padding: '2%'}}>
      <Grid container>
        <Grid item xs={1}>
          <img style={{width: '50%'}} alt="" src={Pilot} />
        </Grid>
        <Grid item xs={11} style={{marginLeft: '-2%'}}>
          <h1 style={{fontSize: '1.5vw', color: '#242424'}}>About Pilot</h1>
        </Grid>
      </Grid>
      <Grid container>
        <h3 style={{fontSize: '1.2vw', color: '#383838'}}> On the adversity towards citations </h3>
        <p style={{fontSize: '1vw'}}>
          The prompt to first hide research citations are to prevent the cognitive bias of favoring
          papers with higher citations as of higher quality. It has been shown that many academics
          cite references without having actually read the work but rather have read a paper of
          similar interest and drawn their own citations among its sources.
          <StyledLink link={'https://arxiv.org/pdf/cond-mat/0104131.pdf'} item={<sup>1</sup>} /> As
          a result, this leads to a situtation of
          <i> cumulative advantage (also coined the Matthew Effect) </i>, where these authors
          receive ever-growing attention as source citations propagate out among more papers. TLDR;
          Citations are not indicative of the quality of the paper and can serve as a distraction to
          the ones that are actually relevant to a question at hand.
        </p>
      </Grid>
    </Grid>
  )
}
