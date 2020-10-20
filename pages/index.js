/** @jsx jsx */
import { jsx } from "theme-ui";
import SeasonSelector from "../src/components/season-selector.js";
import Chart from "../src/components/chart.js";
import { Input } from "theme-ui";
import { SearchIcon } from "../src/icons/";

const Home = () => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <div
        sx={{
          padding: "5px 40px",
          display: "flex",
          alignItems: "center",
          width: "50%"
        }}
      >
        <SearchIcon />
        <Input
          placeholder="Search for a team"
          sx={{
            paddingLeft: "16px",
            border: "0",
            outline: "none",
            borderBottom: "1px solid transparent",
            ":focus": { borderBottom: "1px solid black", borderRadius: "0px" },
            ":hover": { borderBottom: "1px solid black", borderRadius: "0px" }
          }}
        />
      </div>
      <div
        sx={{
          padding: "40px 40px 0px 40px",
          fontSize: "2rem",
          width: "74rem",
          marginRight: "auto",
          marginLeft: "auto"
        }}
      >
        Footballers
      </div>
      <div
        sx={{
          padding: "0px 40px",
          width: "74rem",
          marginRight: "auto",
          marginLeft: "auto"
        }}
      >
        Visualize football statistics for Barcelona. Go ahead and apply some of
        our available filters.
      </div>
      <div
        sx={{
          width: "74rem",
          marginRight: "auto",
          marginLeft: "auto"
        }}
      >
        <SeasonSelector />
        <Chart />
      </div>
    </div>
  );
};

export default Home;
