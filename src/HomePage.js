//import './HomePage.css'
import { NavLink, Link } from 'react-router-dom';
function HomePage() {
  return (
    <div>
      <section id='intro' className='Container'>
        <h1>Welcome to SpongeRun!</h1>
        <p>We hope to offer a comprehensive guide on speed running
        SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated!
        To start from the beginning <NavLink activeClassName="nav-link-active" className="nav-link" to="/levels/jellyfish-fields">click here!</NavLink> </p>
      </section>

      <section id='suggestions' className='Container'>
        <Link className='router-link' to='/levels'>All Levels</Link>
      </section>
    </div>
  );
}

export default HomePage;
