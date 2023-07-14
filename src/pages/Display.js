import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
const Display = () => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={item.img}
            alt="aijd"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: 'https://drive.google.com/uc?id=1IcgaC-hLD3JadF4vc70C64t1-n6vwTgL',
  },
  {
    img: 'https://drive.google.com/uc?id=1W9GReHwgXUuKR7Yvlun__Q1ubnu8rjcP',
  },
  {
    img: 'https://drive.google.com/uc?id=16UvQjMduAeJx6ud6waQyh3We70xrksej',
  },
  {
    img: 'https://drive.google.com/uc?id=1SGATqUfwS5WIIrhkqRmzU4NWGsEa_2wP',
  },
];

export default Display;
