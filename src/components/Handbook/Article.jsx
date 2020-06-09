import React from 'react'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    articlePaper: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100%"
    }
}))

export default function Article(props) {

    const classes = useStyles()

    return (
        <Grid item xs={12} sm={12} lg={6}>
            <Link to={props.articleLink} style={{textDecoration: "none"}}>
                <Paper elevation={2} className={classes.articlePaper}>
                    <Typography variant="h5" color="primary">
                        {props.articleTitle}
                    </Typography>
                    <Typography variant="h6" style={{color: "grey"}}>
                        {props.articlePublishDate}
                    </Typography>
                    <Typography variant="h6" style={{marginTop: 20}}>
                        {props.articleDescription}
                    </Typography>
                </Paper>
            </Link>
        </Grid>        
    )
}