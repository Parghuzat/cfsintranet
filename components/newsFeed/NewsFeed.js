import React, {useState} from 'react';
import { Box } from '@mui/material';


export default function NewsFeed(props) {
    const data = props.data;
    

    function findImgUrl () {
        const start = data.description.search(/src=/i) + 5;
        const end = data.description.substring(start).search(/"/i) + start;
        const link = data.description.substring(start,end);
        return link;
    }

    return (
        <Box>
            <li>
                <a href={data.link} target='_blank'>{data.title}</a>
                <img src={findImgUrl(data.description)}></img>
                
            </li>
        </Box>
        
    )
}