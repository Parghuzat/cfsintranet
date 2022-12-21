import React from 'react';
import { CfsNewsItems } from './CfsNewsItems';

export default function CfsNews() {


    return (

        <div>
            {CfsNewsItems.map((obj) => {
                return (
                    <p href=''>
                        {obj.title}
                    </p>
                )    
            })}      
        </div>
    )
}