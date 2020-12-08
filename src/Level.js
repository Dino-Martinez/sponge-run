import {Link} from 'react-router-dom';
const json_data = require('./data.json');

function Level(props) {
  const { level_url_extension } = props.match.params;
  const levels = json_data['levels'];
  let level = null;
  levels.forEach((item) => {
    if (item.url === level_url_extension) {
      level = item;
    }
  });
  const techs = level['techs'];
  const steps = level['steps'];
  return (
    <section className='Container'>
      <img className='Banner' src={level.banner_url} alt='Level banner'/>
      <h1>{level.name}</h1>
      <h3>Required Techniques:</h3>
      <ul>
      {
        techs.map((tech, index) => {
          const url = `/techs/${tech.url}`;
          return <li key={index + url}><Link className='Link' to={url}>{tech.name}</Link></li>
        })
      }
      </ul>
      {
        steps.map((step, index) => {
          console.log(step.image_url);
          const visibility = step.image_url !== null ? 'block' : 'none';
          const has_tech = step.tech === 'none' ? 'none' : 'block';
          return (
            <div key={index}>
              <h3> Step {index + 1}.</h3>
              <p> {step.description}</p>
              <img className='Step-Image' style={{display: visibility}} src={step.image_url} alt='Visual portrayal of the description'/>
              <Link className='Image-Subtext Link' style={{display: has_tech}} exact to={step.tech}>Click me for a tutorial!</Link>
            </div>
          )
        })
      }
    </section>
  );
}

export default Level;
