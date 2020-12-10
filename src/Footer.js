import './Footer.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [count, setCount] = useState(0);
  return (
    <div className="Footer">
      Copyright 2020

      <div>
        <button type="button" onClick={() => setCount(count - 1)}>
          -1 Death
        </button>
        <p>
          {count}
          {' '}
          deaths and counting...
        </p>
        <button type="button" onClick={() => setCount(count + 1)}>
          +1 Death
        </button>
      </div>
      <input type="number" onChange={(e) => setCount(e.target.value)} value={count} />
      <Link className="Link" to="/leaderboard/a">Check out the top runs!</Link>
    </div>
  );
}
export default Footer;
