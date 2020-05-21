import React from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core'
import { FaGithub, FaStackOverflow, FaTwitter } from 'react-icons/fa'

export default function ComingSoon(props) {
    return (
        <Container style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
            <CssBaseline />
            <Typography style={{fontFamily: "Balsamiq Sans", color: "#27ae60"}} variant="h1">Coming soon.</Typography>
            <div style={{display: "flex", flexDirection: "row", marginTop: 10}}>
                <a href="https://github.com/LukaPavicic" target="_blank" style={{color: "black"}}><FaGithub style={{fontSize: 35}}/></a>
                <a href="https://stackoverflow.com/users/10249627/crodev?tab=profile" target="_blank" style={{color: "black"}}><FaStackOverflow style={{fontSize: 35, marginLeft: 30}}/></a>
                <a href="https://twitter.com/LukaPavicic4" target="_blank" style={{color: "black"}}><FaTwitter style={{fontSize: 35, marginLeft: 30}}/></a>
            </div>
        </Container>
    )
}