import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.module.css';
import NavBar from '../components/navBar/Navbar';
import SlideShow from '../components/slideShow/SlideShow';
import News from '../components/newsFeed/news';
//import Links from '../components/links/links';

export default function Home() {
  return (
    <div className='main-container'>
      <NavBar />
      <SlideShow />
      <div className='news-calendar-container'>
        <News />
      </div>
      
    </div>
  )
}
