import { Link } from 'react-router-dom';
import React from 'react';

const jsonData = require('./data.json');

function Level(props) {
  const { match: { params: { levelUrlExtension } } } = props;
  const { levels } = jsonData;
  let level = null;
  levels.forEach((item) => {
    if (item.url === levelUrlExtension) {
      level = item;
    }
  });
  const { techs } = level;
  const { steps } = level;
  return (
    <section className="Container">
      <img className="Banner" src={level.banner_url} alt="Level banner" />
      <h1>{level.name}</h1>
      <h3>Required Techniques:</h3>
      <ul>
        {
        techs.map((tech) => {
          const url = `/techs/${tech.url}`;
          return <li key={tech.url}><Link className="Link" to={url}>{tech.name}</Link></li>;
        })
      }
      </ul>
      {
        steps.map((step, index) => {
          const visibility = step.image_url !== null ? 'block' : 'none';
          const hasTech = step.tech === 'none' ? 'none' : 'block';
          return (
            <div key={step.tech}>
              <h3>
                {' '}
                Step
                {index + 1}
                .
              </h3>
              <p>
                {' '}
                {step.description}
              </p>
              <img className="Step-Image" style={{ display: visibility }} src={step.image_url} alt="Visual portrayal of the description" />
              <Link className="Image-Subtext Link" style={{ display: hasTech }} exact to={step.tech}>Click me for a tutorial!</Link>
            </div>
          );
        })
      }
    </section>
  );
}

export default Level;
