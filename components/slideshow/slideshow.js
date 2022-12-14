import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

import { padding } from '@mui/system';

export default function SlideShow(props)
{
    const items = [
        {
            name: "Announcement",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Item # 2",
            description: "Hello World!"
        },
        {
            name: "Item # 2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel 
            sx={{
              paddingTop: '60px',
            }}
        >
            {
                items.map( (item, i) => < Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}