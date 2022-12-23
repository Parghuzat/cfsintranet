import React from "react";
import { Box, Grid} from '@mui/material'

export default function QuickLinks() {

    return (
      <Box
        sx={{
          backgroundColor: 'green'
        }}
      >
          <Grid container spacing={4} sm={2} >
            <Grid item>
              <a href='http://jus00aas0941d/cfs-intranet/it-and-software'>
                <p>
                  ITU
                </p>
              </a>
            </Grid>
            <Grid item>
              <a href='http://jus00aas0941d/cfs-intranet/ministry-links'>
                <p>
                  Ministry Links
                </p>
              </a>
            </Grid>
            <Grid item>
              <a href='http://jus00aas0941d/cfs-intranet/wellness/SitePages/Home.aspx'>
                <p>
                  Wellness
                </p>
              </a>
            </Grid>
            <Grid item>
              <a href='http://jus00aas0941d/cfs-intranet/health-and-safety'>
                <p>
                  Health & Safety
                </p>
              </a>
            </Grid>
          </Grid>
      </Box>
        
    )
 
}