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
  return (
    <p>{level.name}</p>
  );
}

export default Level;
