import React from 'react';
import { LinksItems } from './linksItems';

import { Box, Grid } from '@mui/material'

export default function Links() {


    return (
        <div clasnames="linkitem">
            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                    {LinksItems.map((obj) => {
                        return (
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <a href={obj.url} target='_blank'>
                                        <p>{obj.name}</p> 
                                        <img src={obj.avatar} /> 
                                    </a>
                                </Grid>
                            </Grid>
                        )
                    })}
            </Box>
        </div>
    )
}