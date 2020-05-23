import React from 'react'
import { makeStyles, Typography, Paper, Grid, Button } from '@material-ui/core'
import { FaGithub, FaGlobe, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function AboutMe(props) {
    return (
        <div>
            <Typography variant="h3" style={{marginTop: 80}}>Contact Me</Typography>
            <Typography variant="h5">
                Interested in my work and my skills or just want to contact me? Here are some ways you can contact me.
            </Typography>
            <ul>
                <Typography variant="h5" color="primary"><FaEnvelope /> Email: dev.luka.pavicic@gmail.com</Typography>
                <Typography variant="h5" color="primary"><FaTwitter /> Twitter: LukaPavicic4</Typography>
                <Typography variant="h5" color="primary"><FaGithub /> GitHub: LukaPavicic</Typography>
            </ul>
        </div>
    )
}