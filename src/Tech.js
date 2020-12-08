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
  const image_visibility = tech.banner_url.includes('via.placeholder') ? 'block' : 'none';
  const video_visibility = !tech.banner_url.includes('via.placeholder') ? 'block' : 'none';
  return (
    <div>
      <section className='Container'>
        <img className='Banner' src={tech.banner_url} alt='Banner for this technique.'/>
      </section>
      <section className='Container'>
        <h1>{tech.name}</h1>
        <p>{tech.description}</p>
        <video style={{display: video_visibility}} autoPlay="autoplay" loop muted className='Tech-Tutorial' alt='Tutorial gif for this technique.'>
          <source src={tech.tutorial_url} type='video/mp4'/>
        </video>
        <img style={{display: image_visibility}} src={tech.tutorial_url} alt='No video provided, here is a placeholder'/>
      </section>
    </div>
  )
}

export default Tech;
