import { Link } from 'react-router-dom';
import React from 'react';

const jsonData = require('./data.json');

function List(props) {
  const { match: { params: { listType } } } = props;
  const allItems = jsonData[listType];
  let title = '';
  if (listType === 'techs') {
    title = 'Techniques';
  } else if (listType === 'levels') {
    title = 'Levels';
  }
  return (
    <section id={listType} className="List Container">
      <h1>
        All
        {title}
        :
      </h1>
      <ul>
        {
          allItems.map((item) => {
            const url = `/${listType}/${item.url}`;
            return <li key={item.url}><Link className="Link" to={url}>{item.name}</Link></li>;
          })
        }
      </ul>
    </section>
  );
}

export default List;
