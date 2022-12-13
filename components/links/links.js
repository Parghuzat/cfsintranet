import React from 'react';

import LinksItems from './linksItems';

export default function Links() {


    return (
        <div>
            {LinksItems.map((obj) => {
                const name = obj.name;
                return name;
            })}
        </div>
    )
}