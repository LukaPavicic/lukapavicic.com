import React from 'react'
import { withStyles, CssBaseline, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Container, Typography, Link } from '@material-ui/core'
import MDSource from '../../md/RNHereMaps.md'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../components/Other/CodeBlock'
import '../../css/articles.css'
import Footer from '../../components/Home/Footer'
import Navigation from '../../components/Global/Navigation'

const useStyles = theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 100,
        textAlign: "center",
        wordWrap: "break-word"
    },
    mdStyle: {
        fontSize: 20,
        wordWrap: "break-word",
        width: "100%",
        '&a': {
            color: "#27ae60"
        }
    }
})

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

class RNHereMaps extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            markdown: ""
        }
    }

    componentWillMount() {        
        fetch(MDSource).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {

        const { classes } = this.props
        const { markdown } = this.state

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />

                <Navigation />

                <Container className={classes.container}>
                    <Typography variant="h2" color="primary">How to implement HERE maps in React Native</Typography>
                    <Typography variant="h5">By <Link href="/">Luka Pavičić</Link> in <Link href="/handbook" style={{color: "#27ae60"}}>Handbook</Link></Typography>
                    <Typography variant="h5" style={{color: "grey"}}>Sep 23 '19</Typography>

                    <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: 50, textAlign: "left"}}>
                        <Typography variant="h6">
                            <b>NOTE: I originally came up with this guide by writing an answer to user's question on StackOverflow. 
                            You can find it <a rel="noopener noreferrer" style={{color: "#27ae60"}} href="https://stackoverflow.com/a/58068474/10249627" target="_blank">here.</a></b>
                        </Typography>                                            

                        <ReactMarkdown className={classes.mdStyle} renderers={{code: CodeBlock}} source={markdown} />

                    </div>  
                </Container>
                <Footer />
            </MuiThemeProvider>
        )
    }
}

export default withStyles(useStyles)(RNHereMaps)