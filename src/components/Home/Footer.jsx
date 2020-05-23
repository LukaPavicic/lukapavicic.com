import React from 'react'
import { makeStyles, Typography, Paper, Grid, Button } from '@material-ui/core'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function OtherTech(props) {
    return (
        <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: 50, marginBottom: 20}}>            
            <Typography variant="body1">&copy; Luka Pavičić 2020.</Typography>
        </div>
    )
}