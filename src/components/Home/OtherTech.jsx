import React from 'react'
import { makeStyles, Typography, Paper, Grid, Button } from '@material-ui/core'
import { FaGithub, FaGlobe } from 'react-icons/fa'

export default function OtherTech(props) {
    return (
        <div style={{width: "100%"}}>
            <Typography variant="h3" style={{marginTop: 80}}>Other Tech I Worked With</Typography>
            <Grid container spacing={2} style={{marginTop: 20}}>
                <Grid item xs={12} sm={12} lg={4}>
                    <i style={{fontSize: 200}} class="devicon-heroku-plain-wordmark colored"></i>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <i style={{fontSize: 200}} class="devicon-git-plain-wordmark colored"></i>  
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <i style={{fontSize: 200}} class="devicon-ubuntu-plain-wordmark colored"></i>
                </Grid>
            </Grid>
        </div>
    )
}