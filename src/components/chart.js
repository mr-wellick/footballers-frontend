import React from "react";
import { useState, useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip
} from "recharts";
import { useSelector } from "react-redux";
import { Container } from "theme-ui";

const Chart = () => {
  const [data, setData] = useState([]);
  const { activeSeason, activePosition } = useSelector(
    state => state.footballersReducer
  );

  console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/position", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ season: activeSeason, pos: activePosition })
    })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [activeSeason, activePosition]);

  return (
    <Container p={4}>
      <BarChart
        width={1500}
        height={500}
        data={data}
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
  );
};

export default Chart;
