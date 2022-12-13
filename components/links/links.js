import React from 'react';

import LinksItems from './linksItems';

export default function Links() {


    return (
        <div clasnames="linkitem">
            {LinksItems.map((obj) => {
                const name = obj.name;
                return name;
            })}
        </div>
    )
}