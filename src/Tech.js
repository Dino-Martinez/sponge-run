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
    <div>
      <section class='Container'>
        <img class='Banner' src='https://i.imgur.com/EfJ5eO4.png' alt='Banner for this technique.'/>
      </section>
      <section className='Container'>
        <h1>{tech.name}</h1>
        <p>{tech.description}</p>
        <video autoplay="autoplay" loop muted className='Tech-Tutorial' alt='Tutorial gif for this technique.'>
          <source src={tech.tutorial_url} type='video/mp4'/>
        </video>
      </section>
    </div>
  )
}

export default Tech;
