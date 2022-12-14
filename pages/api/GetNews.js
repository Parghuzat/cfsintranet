import React from 'react';
import axios from 'axios';

export default  function GetNews(){

  async function feed() {
    //change the url of rss feed
    const req = axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://rss.cbc.ca/lineup/canada-toronto.xml');
    req instanceof Promise;
    const res = await req;
    return req.then(res => {
      console.log(res.data.items);
      return res.data.items;
    })
  }
  feed();







}

