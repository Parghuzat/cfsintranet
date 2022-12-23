import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/navbar/Navbar'
import SlideShow from '../src/components/slideShow/SlideShow';
import CfsNews from '../src/components/cfsNews/CfsNews';
import GetNews from '../src/components/newsFeed/GetNews';
import Calendar from '../src/components/calendar/Calendar';
import Links from '../src/components/links/links';
import QuickLinks from '../src/components/links/quickLinks';

import {Grid, Box} from '@mui/material';


export default function Home() {


  return (
    
    <div className='main-container'>
      <NavBar />
      <SlideShow />

      {/* main section */}

    <Grid container sm={2}>

      <Grid container item>
        <Grid item>
          1
        </Grid>
      </Grid>

      <Grid container item>
        <Grid item>
          2
        </Grid>
      </Grid>
    </Grid>

    {/* <Box
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        mr: '200px'
    }}
    >
      

      <Box>
        <CfsNews />
        <GetNews />
        
      </Box>

      <Box
        sx={{
          justifyContent: 'center',
          justifyItems: 'center'
        }}
      >
        <h2>
          Right Section
        </h2>
        <QuickLinks />
      </Box>

    </Box> */}
    </div>
  )
}
