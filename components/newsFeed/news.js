import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const data = async () => {
            const result = await axios('https://api.rss2json.com/v1/api.json?rss_url=https://rss.cbc.ca/lineup/canada-toronto.xml');
            setNews(result.data.items)
        }
        data();
    },[])

    return (

        <div>
            {news.map((obj) => {
                return (
                    <h2>{obj.title}</h2>
                )
            })}
        </div>
    )
}
