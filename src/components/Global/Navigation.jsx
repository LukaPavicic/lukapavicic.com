import React from 'react'
import { AppBar, Typography, Toolbar, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "transparent",
        color: "#27ae60",
        boxShadow: "none"
    }
}))

export default function Navigation(props) {

    const classes = useStyles()

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>                        
                    <Typography variant="h6" className={classes.title}>
                    
                    </Typography>
                    <Link to="/"><Button color="inherit">Home</Button></Link>
                    <Link to="/handbook"><Button color="inherit">Handbook</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}