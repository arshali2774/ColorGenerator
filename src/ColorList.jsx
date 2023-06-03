import React from 'react';
import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';
const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, idx) => (
        <SingleColor
          key={nanoid()}
          color={color}
          index={idx}
        />
      ))}
    </section>
  );
};

export default ColorList;
