import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const useSeasonData = () => {
  const { season } = useSelector((state) => state.footballers);

  if (season.length <= 0) {
    return null;
  }

  return season
    .filter((player) => player.g !== 'NA')
    .filter((player) => player.g !== '0')
    .map((player) => ({
      ...player,
      name: player.name.split(' ')[0],
      a: Number(player.a),
      g: Number(player.g),
    }));
};

const FootballersChart = () => {
  const season = useSeasonData();

  if (!season) {
    return <div>No chart to display</div>;
  }

  return (
    <BarChart
      width={1000}
      height={500}
      data={season}
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
