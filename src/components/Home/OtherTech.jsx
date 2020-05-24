import React from 'react'
import { Typography, Tooltip, Grid } from '@material-ui/core'
import MuiLogo from '../../images/muilogo.png'

export default function OtherTech(props) {
    return (
        <div style={{width: "100%"}}>
            <Typography variant="h3" style={{marginTop: 80}}>Other Tech I Worked With</Typography>
            <Grid container spacing={3} style={{marginTop: 20}}>
                <Tooltip title="Heroku" placement="top">
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <i style={{fontSize: 200}} class="devicon-heroku-plain-wordmark colored"></i>
                    </Grid>
                </Tooltip>                

                <Tooltip title="Git" placement="top">
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <i style={{fontSize: 200}} class="devicon-git-plain-wordmark colored"></i>  
                    </Grid>
                </Tooltip>    
                
                <Tooltip title="Ubuntu Linux" placement="top">
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <i style={{fontSize: 200}} class="devicon-ubuntu-plain-wordmark colored"></i>
                    </Grid>
                </Tooltip>  

                <Tooltip title="Django" placement="top">
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <i style={{fontSize: 200}} class="devicon-django-plain-wordmark colored"></i>  
                    </Grid>
                </Tooltip> 

                <Tooltip title="Bootstrap" placement="top">
                    <Grid item xs={12} sm={6} md={4} lg={4}>                    
                        <i style={{fontSize: 200}} class="devicon-bootstrap-plain-wordmark colored"></i>
                    </Grid>
                </Tooltip> 

                <Tooltip title="Material UI" placement="top">
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <img src={MuiLogo} width="70%" alt="mui logo"/>
                    </Grid>
                </Tooltip>                
            </Grid>            
        </div>
    )
}