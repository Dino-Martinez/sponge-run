// import './HomePage.css'
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <section className="Hero">
        <img className="Banner" src="https://i.imgur.com/k9r5LDN.png" alt="Game banner." />
      </section>
      <section id="intro" className="Container">
        <h1>Welcome to SpongeRun!</h1>
        <p>
          We hope to offer a comprehensive guide on speed running
          SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated!
          Please note that you should complete the game normally before attempting this!
          To start from the beginning
          <Link className="Link" to="/levels/jellyfish-fields">click here!</Link>
        </p>
      </section>

      <section id="suggestions" className="Container">
        <h3>Suggestions:</h3>
        <ul>
          <li><Link className="Link" to="/levels">All Levels</Link></li>
          <li><Link className="Link" to="/techs">All Techs</Link></li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
