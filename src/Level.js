import {Link} from 'react-router-dom';
const json_data = require('./data.json');

function Level(props) {
  const { level_url_extension } = props.match.params;
  const levels = json_data["levels"];
  let level = null;
  levels.forEach((item) => {
    if (item.url === level_url_extension) {
      level = item;
    }
  });
  const techs = level["techs"];
  return (
    <section className="Container">
      <img src={level.banner_url} />
      <h1>{level.name}</h1>
      <h3>Required Techniques:</h3>
      <ul>
      {
        techs.map((tech, index) => {
          const url = `/techs/${tech.url}`;
          return <li key={index + url}><Link className="router-link" to={url}>{tech.name}</Link></li>
        })
      }
      </ul>

      
    </section>
  );
}

export default Level;
