import React from 'react'
import { makeStyles, Typography, Paper, Grid, Button } from '@material-ui/core'
import { FaGithub, FaGlobe } from 'react-icons/fa'

export default function AboutMe(props) {
    return (
        <div>
            <Typography variant="h3" style={{marginTop: 80}}>About Me</Typography>
            <Typography variant="h6">
                I'm an 18-year-old developer from Zagreb, Croatia. My favorite technology is Ruby on Rails and  I love working 
                with everything Ruby related. I'm trying to 
                learn something new every day whether it is Ruby related or not. Sometimes in my free time I like to spend some time 
                on StackOverflow answering questions or learning from them. My other non-programming related hobbies are mountain biking, football 
                or just doing anything fun.
            </Typography>
        </div>
    )
}