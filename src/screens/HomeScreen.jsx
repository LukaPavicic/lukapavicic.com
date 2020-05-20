import React from 'react'
import { CssBaseline, makeStyles, AppBar, Typography, Toolbar, Button, Container, Grid } from '@material-ui/core'

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
                </Toolbar>
            </AppBar>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <Grid container>
                    <Grid item>
                        <Typography variant="h3">Hi, I am Luka Pavičić, a full-stack web developer.</Typography>
                        <Typography variant="h6">Ruby, Rails, React, React Native</Typography>
                    </Grid>                    
                </Grid>
            </Container>
        </div>
    )
}