import React from 'react';

const jsonData = require('./data.json');

function Tech(props) {
  const { match: { params: { techUrlExtension } } } = props;
  const { techs } = jsonData;
  let tech = null;
  techs.forEach((item) => {
    if (item.url === techUrlExtension) {
      tech = item;
    }
  });
  const imageVisibility = tech.banner_url.includes('via.placeholder') ? 'block' : 'none';
  const videoVisibility = !tech.banner_url.includes('via.placeholder') ? 'block' : 'none';
  return (
    <div>
      <section className="Container">
        <img className="Banner" src={tech.banner_url} alt="Banner for this technique." />
      </section>
      <section className="Container">
        <h1>{tech.name}</h1>
        <p>{tech.description}</p>
        <video style={{ display: videoVisibility }} autoPlay="autoplay" loop muted className="Tech-Tutorial" alt="Tutorial gif for this technique.">
          <source src={tech.tutorial_url} type="video/mp4" />
        </video>
        <img style={{ display: imageVisibility }} src={tech.tutorial_url} alt="No video provided, here is a placeholder" />
      </section>
    </div>
  );
}

export default Tech;
