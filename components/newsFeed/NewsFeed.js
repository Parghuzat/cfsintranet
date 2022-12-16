import React, {useState} from 'react';
import { Box } from '@mui/material';

import '../newsFeed/NewsFeed.module.css';
import { WrappedBuildError } from 'next/dist/server/base-server';


export default function NewsFeed(props) {
    const data = props.data;
    

    function findImgUrl () {
        const start = data.description.search(/src=/i) + 5;
        const end = data.description.substring(start).search(/"/i) + start;
        const link = data.description.substring(start,end);
        return link;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                pt: '20px',
                pb: '20px',
                width: "250px",
                boxShadow: 1,
                backgroundColor: 'background.paper',
                border: 1,
                borderColor: 'dark',
                borderRadius: 2,
                fontWeight: 'bold',
                fontSize: 14,
                textDecoration: 'none',
                
                
            }}
        >
            <a href={data.link} target='_blank'>
                <img src={findImgUrl(data.description)} width="150" height="auto"></img>
                <p >{data.title}</p>
            </a>
                
        </Box>
        
    )
}