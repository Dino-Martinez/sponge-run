import {Link} from 'react-router-dom';
const json_data = require('./data.json');

function List(props) {
  const { list_type } = props.match.params;
  let all_items = json_data[list_type];
  let title = '';
  if (list_type === 'techs') {
    title = 'Techniques';
  } else if (list_type === 'levels') {
    title = 'Levels';
  }
  return (
    <section id={list_type} className='List Container'>
      <h1>All {title}:</h1>
      <ul>
        {
          all_items.map((item, index) => {
            const url = `/${list_type}/${item.url}`;
            return <li key={index} ><Link className="Link" to={url}>{item.name}</Link></li>
          })
        }
      </ul>
    </section>
  )
}

export default List;
