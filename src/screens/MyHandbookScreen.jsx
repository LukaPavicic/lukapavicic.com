import React from 'react'
import { makeStyles, CssBaseline, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Container, Typography, Paper, Grid } from '@material-ui/core'
import Footer from '../components/Home/Footer'
import Navigation from '../components/Global/Navigation'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 100,
        textAlign: "center"
    },
    categoriesContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        marginTop: 70
    },
    articlePaper: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
}))

let theme = createMuiTheme({
    typography: {
        "fontFamily": "Balsamiq Sans",
        "color": "#27ae60"
    },
    palette: {
        primary: { main: "#27ae60"},
        secondary: { main: "#000" }
    },
})

theme = responsiveFontSizes(theme)

export default function MyHandbookScreen(props) {

    const classes = useStyles()

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />

            <Navigation />

            <Container className={classes.container}>
                <Typography variant="h1" color="primary">Handbook</Typography>
                <Typography variant="h5">By <Link href="/" style={{color: "#27ae60"}}>Luka Pavičić</Link></Typography>

                <Typography variant="h5" style={{marginTop: 40}}>In this handbook I will document anything useful I find about programming.</Typography>
                <div className={classes.categoriesContainer}>
                    <Typography variant="h4" style={{color: "grey"}}>React Native</Typography>
                    <Grid container spacing={4} style={{marginTop: 1}}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Link to="/handbook/how-to-implement-here-maps-in-react-native" style={{textDecoration: "none"}}>
                                <Paper elevation={2} className={classes.articlePaper}>
                                    <Typography variant="h5" color="primary">
                                        How to implement HERE maps in React Native
                                    </Typography>
                                    <Typography variant="h6" style={{color: "grey"}}>
                                        Sep 23 '19
                                    </Typography>
                                    <Typography variant="h6" style={{marginTop: 20}}>   
                                        Step-by-step guide on how to implement HERE maps with React Native
                                    </Typography>
                                </Paper>
                            </Link>                            
                        </Grid>
                    </Grid>
                </div>                
            </Container>
            <Footer />
        </MuiThemeProvider>
    )
}