import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navBar/Navbar';
import SlideShow from '../components/slideShow/SlideShow';
import CfsNews from '../components/cfsNews/CfsNews';
import GetNews from '../components/newsFeed/GetNews';
import Calendar from '../components/calendar/Calendar';
import Links from '../components/links/links';

import {Grid, Box, Paper} from '@mui/material';
import Link from 'next/link';

export default function Home() {

  

  return (
    
    

    <div className='main-container'>
      <NavBar />
      <SlideShow />

      {/* main section */}

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
      <Box>
        <h2>  
          Left Section
        </h2>
      </Box>

      <Box>
        
      </Box>

      <Box>
        
      </Box>

    </Box>



      <Grid container spacing={2}>

        <Grid container item spacing={2}>
          <FormRow />
          <div>
            <h2>  
              This is the Left Section
            </h2>
          </div>
        </Grid>

        {/* center section */}
        <Grid container item spacing={2}>

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

        {/* right section */}
        <Grid container item spacing={2}>

        </Grid>

      </Grid>
    </div>
  )
}
