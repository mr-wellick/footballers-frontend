import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const FootballersChart = () => {
  const { season } = useSelector((state) => state.footballers);

  if (season.length <= 0) {
    return <div>No chart to display</div>;
  }

  const filteredData = season
    .filter((player) => player.g !== "NA")
    .filter((player) => player.g !== "0")
    .map((player) => ({ ...player, name: player.name.split(" ")[0] }))
    .map((player) => ({ ...player, a: Number(player.a), g: Number(player.g) }));

  return (
    <BarChart
      width={1000}
      height={500}
      data={filteredData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="g" fill="#8884d8" />
      <Bar dataKey="a" fill="#82ca9d" />
    </BarChart>
  );
};

export default FootballersChart;
