//import './HomePage.css'
import { NavLink } from 'react-router-dom';
function HomePage() {
  return (
    <div>
      <section id='intro' className='Container'>
        <h1>Welcome to SpongeRun!</h1>
        <p>We hope to offer a comprehensive guide on speed running
        SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated!
        To start from the beginning <NavLink activeClassName="nav-link-active" className="nav-link" to="/levels">click here!</NavLink> </p>
      </section>

      <section id='suggestions' className='Container'>
        <a href='/levels/jellyfish'>Jellyfish Fields</a>
        <a href='/tech/patrick-skip'>Patrick Skip</a>
      </section>
    </div>
  );
}

export default HomePage;
