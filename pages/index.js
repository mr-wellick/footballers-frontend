import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip
} from "recharts";
import filter from "lodash.filter";

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";

const Home = ({ data }) => {
  const forwards = filter(data, data => data.pos === "F");

  return (
    <div sx={{ variant: "containers.page" }}>
      <Container p={4}>
        <BarChart
          width={1500}
          height={500}
          data={forwards}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="app" fill="#22b2c7" />
          <Bar dataKey="g" fill="#dda4a7" />
          <Bar dataKey="a" fill="#a2ad66" />
          <Tooltip />
          <Legend />
        </BarChart>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/api/v1/season", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ season: "season_2008" })
  });
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default Home;
