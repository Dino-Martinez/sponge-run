import React from 'react';
import jQuery from 'jquery';

class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      runs: {},
    };
  }

  async componentDidMount() {
    const jsonData = await jQuery.getJSON('https://www.speedrun.com/api/v1/leaderboards/yd4ojjg1/category/zd3xvw8d?top=3', (json) => json.data.runs);
    this.setState({
      loaded: true,
      runs: jsonData.data.runs,
    });
  }

  render() {
    const { runs, loaded } = this.state;
    return (
      <section className="Container">
        <h1>
          Top 3 runs:
        </h1>
        {loaded
          && (
            <ul>
              {
                runs.map((data) => {
                  const { place, run } = data;

                  return (
                    <li key={place}>
                      <p>{place}</p>
                      <p>{run.date}</p>
                      <p>{run.times.primary_t}</p>
                    </li>
                  );
                })
              }
            </ul>
          )}
        <p>
          This data was loaded from the API provided by
          <a href="https://speedrun.com">Speedrun.com</a>
        </p>
      </section>
    );
  }
}

export default Leaderboard;
