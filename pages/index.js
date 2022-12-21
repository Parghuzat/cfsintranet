import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navBar/Navbar';
import SlideShow from '../components/slideShow/SlideShow';
import CfsNews from '../components/cfsNews/CfsNews';
import GetNews from '../components/newsFeed/GetNews';
import Calendar from '../components/calendar/Calendar';
import Links from '../components/links/links';

import {Grid} from '@mui/material';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='main-container'>
      <NavBar />
      <SlideShow />
      <Grid container>

        <Grid container='left'>

        </Grid>

        <Grid container='main'>

          <Grid item='cfsNews'>
            <CfsNews />
          </Grid>
          <Grid item='cbcNews'>
            <GetNews />
          </Grid>
          <Grid item='links'>
            <Links />
          </Grid>
        </Grid>

        <Grid container='right'>

        </Grid>

      </Grid>
    </div>
  )
}
