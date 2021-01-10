import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={season}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis orientation="right" />
        <Tooltip />
        <Legend />
        <Bar dataKey="g" fill="#8884d8" />
        <Bar dataKey="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FootballersChart;
