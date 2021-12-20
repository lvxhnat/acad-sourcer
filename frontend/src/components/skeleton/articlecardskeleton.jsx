import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid'
import React from 'react';

export default function ArticleCardSkeleton(props) {

    return (
        <React.Fragment>
            <Grid
                key={props.keyid}
                container
                style={{ padding: '2%', paddingLeft: '0', borderBottom: '1px solid #DFDFDF' }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Skeleton animation="wave" style={{ minWidth: '100%' }} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={1}>
                        <Skeleton animation="wave" style={{ minWidth: '100%' }} />
                    </Grid>
                </Grid>
                <Grid
                    container
                    style={{ paddingTop: '2%' }}
                    justifyContent="left"
                    align="left"
                    direction="row">
                    <Grid container style={{ paddingBottom: '2%' }}>
                        <Skeleton animation="wave" style={{ minWidth: '100%' }} />
                    </Grid>
                    <Grid container>
                        <Grid item xs={7}>
                            <Skeleton animation="wave" style={{ minWidth: '100%' }} />
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={1}>
                            <Skeleton animation="wave" style={{ minWidth: '100%' }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >
    )
}