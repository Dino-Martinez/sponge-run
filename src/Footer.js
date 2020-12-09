import './Footer.css';
import React, { useState } from 'react';

function Footer() {
  const [count, setCount] = useState(0);
  return (
    <div className='Footer'>
      Copyright 2020

      <div>
        <button onClick={() => setCount(count - 1)}>
        -1 Death
        </button>
        <p>{count} deaths and counting...</p>
        <button onClick={() => setCount(count + 1)}>
        +1 Death
        </button>
      </div>
      <input type='number' onChange={(e) => setCount(e.target.value)} value={count}/>
    </div>
  );
}
export default Footer;
