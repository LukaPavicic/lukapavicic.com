import React from 'react'
import { CssBaseline, makeStyles, AppBar, Typography, Toolbar, Button, Container, Grid } from '@material-ui/core'
import MainIllustration from '../images/mainpage.svg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#e74c3c"
    },
    mainContainer: {
        height: "90vh",
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    mainLeft: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 40
    }
}));

export default function HomeScreen(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>                
                    <Typography variant="h6" className={classes.title}>
                        Luka Pavičić
                    </Typography>
                    <Button color="inherit">PROJECTS</Button>
                </Toolbar>                
            </AppBar>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <Grid container>
                    <Grid item xs={12} lg={6} sm={6} className={classes.mainLeft}>
                        <Typography variant="h3">Hi, I am Luka Pavičić, a full-stack web developer.</Typography>
                        <Typography variant="h6">Ruby, Rails, React, React Native</Typography>
                        <Button variant="contained" style={{backgroundColor: "#e74c3c", color: "white", width: "auto", marginTop: 10}}>VIEW MORE</Button>
                    </Grid>  
                    <Grid item xs={12} lg={6} sm={6}>
                        <img src={MainIllustration} width="80%"/>
                    </Grid>                  
                </Grid>
            </Container>
        </div>
    )
}