/** @jsx jsx */
import { jsx } from "theme-ui";
import SeasonSelector from "../src/components/season-selector.js";

const Home = () => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <SeasonSelector/>
    </div>
  );
};

export default Home;
