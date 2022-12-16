import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsFeed from './NewsFeed';
import '../newsFeed/News.module.css';

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
        <div className='newsCards-container'>
           {/* <img src={rssFeed.feed.image} ></img> */}
            {newsItem.map((obj) => {
                return ( <NewsFeed data={obj} /> )
            })}
        </div>
    )
}
