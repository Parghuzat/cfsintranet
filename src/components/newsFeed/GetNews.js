import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Box, Paper } from '@mui/material';
//import NewsFeed from './NewsFeed';
//import '../newsFeed/News.module.css';

export default function GetNews() {

    const [newsItem, setNewsItem] = useState([]);
    const [rssFeed, setRssFeed] = useState([]);

    useEffect(() => {
        const data = async () => {
            const result = await axios('https://api.rss2json.com/v1/api.json?rss_url=https://rss.cbc.ca/lineup/topstories.xml');
            setNewsItem(result.data.items);
            setRssFeed(result.data);
        }
        data();
    },[])

    return (

        <Box 
            sx={{
                flexDirection: 'row',
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: '80%',
                mr: '200px'
            }}
        >
            {/* <img src={rssFeed.feed.image} ></img>  */}
           
            {newsItem.map((obj) => {
                return ( 
                    <Paper>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'center',
                                alignItems: 'center',
                                mx: '10px',
                                my: '10px',
                                px: '10px',
                                py: '10px',
                                width: '200px',
                                boxShadow: 1,
                                borderRadius: 2,
                                fontWeight: 'bold',
                                fontSize: 14,
                                textDecoration: 'none',            
                            }}
                        >
                            <a href={obj.link} target='_blank'>
                                <img src={obj.thumbnail} width="180" height="auto"></img>
                                <p >{obj.title}</p>
                            </a>
                        </Box>
                    </Paper>
                )
            })}
        </Box>
    )
}
