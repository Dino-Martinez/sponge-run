import React from 'react';
import './Leaderboard.css';

class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      runs: {},
      users: [],
    };
  }

  componentDidMount() {
    this.retrieveData();
  }

  async retrieveData() {
    // await all data results
    const res = await fetch('https://www.speedrun.com/api/v1/leaderboards/yd4ojjg1/category/zd3xvw8d?top=3');
    const json = await res.json();
    const { runs } = json.data;
    const users = await Promise.all(runs.map(async (data) => {
      const userRes = await fetch(data.run.players[0].uri);
      const user = await userRes.json();
      return user;
    }));

    // once results are resolved, set state
    this.setState({
      loaded: true,
      runs,
      users,
    });
  }

  render() {
    const { runs, users, loaded } = this.state;
    return (
      <section className="Container">
        <h1>
          Top 3 runs:
        </h1>
        {loaded
          && (
            <ul className="Leaderboard">
              <li className="Run">
                <p>Place</p>
                <p>Name</p>
                <p>Run Time</p>
                <p>Date</p>
                <p>Link</p>
              </li>
              {
                runs.map((data, index) => {
                  const { place, run } = data;

                  return (
                    <li className="Run" key={place}>
                      <p>{place}</p>
                      <p>{users[index].data.names.international}</p>
                      <p>{run.times.primary_t}</p>
                      <p>{run.date}</p>
                      <a className="Link" href={run.weblink}>To Speedrun.com</a>
                    </li>
                  );
                })
              }
            </ul>
          )}
        <p>
          This data was loaded from the API provided by
          <a className="Link" href="https://speedrun.com"> Speedrun.com</a>
        </p>
      </section>
    );
  }
}

export default Leaderboard;
