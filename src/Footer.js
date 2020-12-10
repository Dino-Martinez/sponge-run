import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      Copyright 2020
      <Link className="Link" to="/leaderboard/a">Check out the top runs!</Link>
    </div>
  );
}
export default Footer;
