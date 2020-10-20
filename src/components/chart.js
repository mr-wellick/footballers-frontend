import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "theme-ui";
/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip
} from "recharts";

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
    <div sx={{ margin: "40px 0" }}>
      <BarChart
        width={1104}
        height={500}
        data={data}
        margin={{
          top: 5,
          bottom: 5
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
    </div>
  );
};

export default Chart;
