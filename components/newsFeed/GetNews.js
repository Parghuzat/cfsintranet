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
            const result = await axios('https://api.rss2json.com/v1/api.json?rss_url=https://rss.cbc.ca/lineup/canada-toronto.xml');
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
                flexWrap: 'wrap'
            }}>
            {/* <img src={rssFeed.feed.image} ></img> */}
           
            {newsItem.map((obj) => {
                return ( 
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
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
                            fontSize: 16,
                            textDecoration: 'none',            
                        }}
                        >
                            <p>pp</p>
                            <a href={obj.link} target='_blank'>
                            <img src={obj.thumbnail} width="240" height="auto"></img>
                            <p >{obj.title}</p>
                        </a>
                        </Box>
                    
                )
            })}
        </Box>
    )
}
