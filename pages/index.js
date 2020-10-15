import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [seasons, setSeasons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/seasons")
      .then(res => res.json())
      .then(data => {
        const seasonValues = data.map(item => item.Tables_in_poc_config);
        setSeasons(seasonValues);
      })
      .catch(err => console.error(err));
  }, []);

  return seasons.map(season => <p key={season}>{season}</p>);
};

export default Home;
