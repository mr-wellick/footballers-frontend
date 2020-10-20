import React from "react";
import { useEffect } from "react";
import { Container } from "theme-ui";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "theme-ui";
import { fetchSeasons } from "../redux/";

const SeasonSelector = () => {
  const { seasons } = useSelector(state => state.footballersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeasons());
  }, []);

  return null;

  //return (
  //  <Container p={2}>
  //    <Select onChange={e => console.log(e.target.value)}>
  //      {seasons.map(season => (
  //        <option key={season} value={season}>
  //          {season.split("_").join(" ")}
  //        </option>
  //      ))}
  //    </Select>
  //    <Select defaultValue="F">
  //      <option value="F">F</option>
  //      <option value="M">M</option>
  //      <option value="D">D</option>
  //    </Select>
  //  </Container>
  //);
};

export default SeasonSelector;
