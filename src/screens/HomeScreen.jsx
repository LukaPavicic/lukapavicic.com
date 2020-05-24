import React from 'react'
import { CssBaseline, makeStyles, Typography, Container, MuiThemeProvider, createMuiTheme, responsiveFontSizes, AppBar, Toolbar, Button, Link } from '@material-ui/core'
import { IoIosPin } from 'react-icons/io'
import { FaGithub, FaStackOverflow, FaTwitter } from 'react-icons/fa'
import MyProjects from '../components/Home/MyProjects'
import AboutMe from '../components/Home/AboutMe'
import OtherTech from '../components/Home/OtherTech'
import Footer from '../components/Home/Footer'
import Contact from '../components/Home/Contact'

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
    locationDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        color: "grey"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "transparent",
        color: "#27ae60",
        boxShadow: "none"
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

export default function HomeScreen(props) {

    const classes = useStyles()

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>                        
                        <Typography variant="h6" className={classes.title}>
                        
                        </Typography>
                        <Link href="/handbook"><Button color="inherit">Handbook</Button></Link>
                    </Toolbar>
                </AppBar>
                <Container className={classes.container}>                    
                    <Typography color="primary" variant="h1">Luka Pavičić</Typography>
                    <Typography variant="h4">Full-Stack developer with experience in Ruby, Rails, React and React Native</Typography>
                    <div className={classes.locationDiv}>
                        <Typography variant="h4" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><IoIosPin /> </Typography>
                        <Typography variant="h4" style={{marginLeft: 10}}>Zagreb, Croatia</Typography>                                                
                    </div>    
                    <div style={{display: "flex", flexDirection: "row", marginTop: 20}}>
                        <a href="https://github.com/LukaPavicic" target="_blank" style={{color: "black"}}><FaGithub style={{fontSize: 35}}/></a>
                        <a href="https://stackoverflow.com/users/10249627/crodev?tab=profile" target="_blank" style={{color: "black"}}><FaStackOverflow style={{fontSize: 35, marginLeft: 30}}/></a>
                        <a href="https://twitter.com/LukaPavicic4" target="_blank" style={{color: "black"}}><FaTwitter style={{fontSize: 35, marginLeft: 30}}/></a>
                    </div>
                    <AboutMe />
                    <MyProjects />  
                    <OtherTech />
                    <Contact />   
                    <Footer />  
                </Container>
            </div>
        </MuiThemeProvider>        
    )
}