import React from 'react';
import { LinksItems } from './linksItems';

import { Box } from '@mui/material'

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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    
                    }}
            >
                    {LinksItems.map((obj) => {
                        
                        return (
                            <a href={obj.url} target='_blank'>
                              <p>{obj.name}</p>  
                            </a>
                            
                        )
                        
                    })}

                </Box>
            </Box>
             
        </div>
    )
}