import {Link} from 'react-router-dom';
const json_data = require('./data.json');

function TechList() {
  let all_tech = json_data['techs'];
  return (
    <section id='tech-list' className='Tech-List Container'>
      <ul>
        {
          all_tech.map((tech, index) => {
            const url = `/techs/${tech.url}`;
            return <li key={index} ><Link className="Link" to={url}>{tech.name}</Link></li>
          })
        }
      </ul>
    </section>
  )
}

export default TechList;
