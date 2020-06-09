import React from 'react'
import { withStyles, CssBaseline, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Container, Typography, Link } from '@material-ui/core'
import MDSource from '../../md/SettingUpPostgres.md'
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

class SettingUpPostgres extends React.Component {

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
                    <Typography variant="h2" color="primary">Setting Up PostgreSQL in Rails</Typography>
                    <Typography variant="h5">By <Link href="/">Luka Pavičić</Link> in <Link href="/handbook" style={{color: "#27ae60"}}>Handbook</Link></Typography>
                    <Typography variant="h5" style={{color: "grey"}}>Jun 9 '20</Typography>

                    <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: 50, textAlign: "left"}}>
                        <ReactMarkdown className={classes.mdStyle} renderers={{code: CodeBlock}} source={markdown} />
                    </div>  
                </Container>
                <Footer />
            </MuiThemeProvider>
        )
    }
}

export default withStyles(useStyles)(SettingUpPostgres)