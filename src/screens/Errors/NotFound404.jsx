import React from 'react'
import { Typography, Container, createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core'
import { Link } from 'react-router-dom'

let theme = createMuiTheme({
    typography: {
        "fontFamily": "Montserrat",
        "color": "#27ae60"
    },
    palette: {
        primary: { main: "#27ae60"},
        secondary: { main: "#000" }
    },
})

theme = responsiveFontSizes(theme)

const NotFound404 = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
                <Typography style={{color: "#27ae60"}} variant="h1">404 Not Found</Typography>
                <Typography variant="h3">Try going back to the <Link to="/">home page.</Link></Typography>
            </Container>
        </ThemeProvider>        
    )
}

export default NotFound404