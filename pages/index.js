import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navBar/Navbar';
import SlideShow from '../components/slideShow/SlideShow';
import GetNews from '../components/newsFeed/GetNews';
import Calendar from '../components/calendar/Calendar';
import {Grid} from '@mui/material';
//import Links from '../components/links/links';

export default function Home() {
  return (
    <div className='main-container'>
      <NavBar />
      <SlideShow />
      <Grid container>
        <Grid item xs={8}>
          <GetNews />
        </Grid>
        <Grid item xs={2}>
          <Calendar />
        </Grid>
      </Grid>
    </div>
  )
}
