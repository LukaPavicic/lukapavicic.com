import React from 'react'
import { makeStyles, CssBaseline, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Container, Typography, Paper, Grid } from '@material-ui/core'
import Footer from '../components/Home/Footer'
import Navigation from '../components/Global/Navigation'
import { Link } from 'react-router-dom'
import Article from '../components/Handbook/Article'

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
                <Typography variant="h5">By <Link to="/" style={{color: "#27ae60"}}>Luka Pavičić</Link></Typography>

                <Typography variant="h5" style={{marginTop: 40}}>In this handbook I will document anything useful I find about programming.</Typography>
                <div className={classes.categoriesContainer}>

                    <Typography variant="h4" style={{color: "grey"}}>Ruby On Rails</Typography>
                    <Grid container spacing={4} style={{marginTop: 1}}>
                        <Article 
                            articleTitle="How to setup Rails for API-only development"
                            articleDescription="Step-by-step guide on how to setup Rails for API-only development"
                            articlePublishDate="May 25 '20"
                            articleLink="/handbook/how-to-setup-rails-for-api-only-development"
                        /> 
                        <Article 
                            articleTitle="Setting Up PostgreSQL in Rails"
                            articleDescription="Step-by-step guide on how to setup PostgreSQL for Rails"
                            articlePublishDate="Jun 9 '20"
                            articleLink="/handbook/setting-up-postgresql-for-rails"
                        />                          
                    </Grid>

                    <Typography variant="h4" style={{color: "grey", marginTop: 30}}>React Native</Typography>
                    <Grid container spacing={4} style={{marginTop: 1}}>
                        <Article 
                            articleTitle="How to implement HERE maps in React Native"
                            articleDescription="Step-by-step guide on how to implement HERE maps with React Native"
                            articlePublishDate="Sep 23 '19"
                            articleLink="/handbook/how-to-implement-here-maps-in-react-native"
                        />                         
                    </Grid>                    
                </div>
            </Container>
            <Footer />
        </MuiThemeProvider>
    )
}