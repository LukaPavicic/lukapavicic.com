import React from 'react'
import SanicPreview from '../../images/sanicpreview.png'
import UpvotePreview from '../../images/upvotepreview.png'
import { makeStyles, Typography, Paper, Grid, Button } from '@material-ui/core'
import { FaGithub, FaGlobe } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
    singleProjectPaper: {
        padding: 20
    }
}))

export default function MyProjects(props) {

    const classes = useStyles()

    return (
        <div>
            <Typography variant="h3" style={{marginTop: 80}}>Projects I worked on</Typography>   
            <Grid spacing={3} container style={{marginTop: 20}}>
                <Grid item xs={12} lg={6} sm={12}>
                    <Paper elevation={2} className={classes.singleProjectPaper}>
                        <Typography variant="h4" color="primary">SanicYT</Typography>
                        <Typography variant="h5">Really fast and easy to use YouTube songs downloader</Typography>
                        <Typography variant="h6">Tech used: Ruby, Sinatra, React</Typography>                            
                        <img src={SanicPreview} width="100%"/>    

                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10}}>
                            <Button onClick={() => window.open("https://github.com/LukaPavicic/SanicYT", "_blank")} variant="contained" style={{backgroundColor: "#27ae60", color: "white"}}>
                                <FaGithub style={{marginRight: 5}}/> GitHub
                            </Button>
                            <Button onClick={() => window.open("https://sanicyt.lukapavicic.com/", "_blank")} variant="contained" style={{backgroundColor: "#27ae60", color: "white"}}>
                                <FaGlobe style={{marginRight: 5}}/> Live Website
                            </Button>
                        </div>                            
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6} sm={12}>
                    <Paper elevation={2} className={classes.singleProjectPaper}>
                        <Typography variant="h4" color="primary">Upvote</Typography>
                        <Typography variant="h5">Reddit clone web app developed for final high school project</Typography>
                        <Typography variant="h6">Tech used: Python, Django, React, Bootstrap</Typography>      
                        <img src={UpvotePreview} width="100%"/> 

                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10}}>
                            <Button onClick={() => window.open("https://github.com/LukaPavicic/upvote-backend", "_blank")} variant="contained" style={{backgroundColor: "#27ae60", color: "white"}}>
                                <FaGithub style={{marginRight: 5}}/> GitHub
                            </Button>                                    
                        </div>  
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}