import React from 'react';
import { CfsNewsItems } from './CfsNewsItems';

export default function CfsNews() {


    return (

        <div>
            {CfsNewsItems.map((obj) => {
                return (
                    <a href=''>
                        <p >
                            {obj.title}
                        </p>
                    </a>
                    
                )    
            })}      
        </div>
    )
}