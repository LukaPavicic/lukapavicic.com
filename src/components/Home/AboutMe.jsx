import React from 'react'
import { Typography } from '@material-ui/core'

export default function AboutMe() {
    return (
        <div>
            <Typography variant="h3" style={{marginTop: 80}}>About Me</Typography>
            <Typography variant="h6">
                I'm an 18-year-old developer from Zagreb, Croatia. My favorite technology is Ruby on Rails and  I love working 
                with everything Ruby related. I'm trying to 
                learn something new every day whether it is Ruby related or not. I spend some of my free time answering questions on StackOverflow 
                or learning from them. My other non-programming related hobbies are mountain biking, football 
                or just doing anything fun.
            </Typography>
        </div>
    )
}