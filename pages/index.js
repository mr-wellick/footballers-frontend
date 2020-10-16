/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import { Select } from "theme-ui";
import { useState, useEffect } from "react";

const useHandler = e => {
  return async e => {
    const { value } = e.target;
    const res = await fetch("http://localhost:5000/api/v1/season", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ season: value })
    });

    try {
      const data = await res.json();
      console.log(data);
      return;
    } catch (err) {
      console.error(err);
    }
  };
};

const Home = () => {
  const [seasons, setSeasons] = useState([]);
  const handler = useHandler();

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/seasons")
      .then(res => res.json())
      .then(data => {
        const filteredData = data.map(datum => datum.Tables_in_poc_config);
        setSeasons(filteredData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div sx={{ variant: "containers.page" }}>
      <Box
        sx={{ padding: "0 40px", paddingTop: "24px", paddingBottom: "20px" }}
      >
        <Select defaultValue="Select a season" sx={{ width: "50%" }}>
          {seasons.map(season => (
            <option key={season} value={season} onClick={handler}>
              {season.replace("_", " ")}
            </option>
          ))}
        </Select>
      </Box>
    </div>
  );
};

export default Home;
