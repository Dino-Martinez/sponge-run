import './Header.css';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
      <div className='Nav-Bar'>
        <NavLink className='Nav-Link' activeClassName='Nav-Link-active' exact to='/'>Home</NavLink>
        <NavLink className='Nav-Link' activeClassName='Nav-Link-active' to='/levels'>Levels</NavLink>
        <NavLink className='Nav-Link' activeClassName='Nav-Link-active' to='/techs'>Techniques</NavLink>
      </div>
    </div>
  );
}
export default Header;
