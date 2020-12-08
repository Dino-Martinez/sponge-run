import {Link} from 'react-router-dom';
const json_data = require('./data.json');

function Tech(props) {
  const { tech_url_extension } = props.match.params;
  const techs = json_data['techs'];
  let tech = null;
  techs.forEach((item) => {
    if (item.url === tech_url_extension) {
      tech = item;
    }
  });
  return (
    <section className='Container'>
      <img src={tech.banner_url}/>
      <h1>{tech.name}</h1>
      <p>{tech.description}</p>
      <img src={tech.tutorial_url}/>
    </section>
  )
}

export default Tech;
