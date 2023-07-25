import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

// import flist from "./datajs/flist.js";
import forBandB from './datajs/forBandB.js';
import forImageList1 from './datajs/forImageList1.js';
import forImagesRandom from './datajs/forImagesRandom.js';
import forNecklace from './datajs/forNecklace.js';
import forRings from './datajs/forRings.js';

const Ran = () => {
    const valz =[];
    const smth = forImagesRandom.concat(forImageList1, forNecklace, forRings, forBandB);
    for (let index = 0; index < 12; index++) {
        valz.push(Math.floor(Math.random() * smth.length));
    }

    return (
            <ImageList cols={3} >
                {valz.map((pos) => (
                    <ImageListItem key={smth[pos].id}>
                    <img className='img-fluid'
                        src={"https://drive.google.com/uc?id="+smth[pos].id}
                        alt="aijd"
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
    )
}

export default Ran;