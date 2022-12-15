import React, {useState} from 'react';
import { Box } from '@mui/material';


export default function NewsFeed(props) {
    const data = props.data;

    return (
        <Box>
            <li>
                <a href={data.link} target='_blank'>{data.title}</a>
                <img src={data.tumbnail}></img>
            </li>
        </Box>
        
    )
}