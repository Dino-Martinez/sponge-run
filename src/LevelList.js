//import 'LevelList.css'
import {Link} from 'react-router-dom';
function LevelList() {
  let all_levels = [
    {name:"Jellyfish Fields", url:'jellyfish-fields'},
    {name:"Downtown Bikini Bottom", url:'downtown'}
  ];
  return (
    <section id='level-list' className='Level-List'>
      <ul>
        {
          all_levels.map((level, index) => {
            const url = `/levels/${level.url}`;
            return <li key={index} ><Link className="router-link" to={url}>{level.name}</Link></li>
          })
        }
      </ul>
    </section>
  );
}

export default LevelList;
