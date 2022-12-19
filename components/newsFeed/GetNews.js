import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
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
                justifyContent: 'flex-start'
            }}
        >
            {/* <img src={rssFeed.feed.image} ></img>  */}
           
            {newsItem.map((obj) => {
                return ( 
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'center',
                                alignItems: 'center',
                                mx: '20px',
                                my: '20px',
                                px: '10px',
                                py: '10px',
                                width: '200px',
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
                            <a href={obj.link} target='_blank'>
                                <img src={obj.thumbnail} width="180" height="auto"></img>
                                <p >{obj.title}</p>
                            </a>
                        </Box>
                    
                )
            })}
        </Box>
    )
}
