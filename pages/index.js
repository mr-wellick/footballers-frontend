/** @jsx jsx */
import { jsx } from "theme-ui";
import SeasonSelector from "../src/components/season-selector.js";
import Chart from "../src/components/chart.js";

const Home = () => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <SeasonSelector />
      <Chart />
    </div>
  );
};

export default Home;
