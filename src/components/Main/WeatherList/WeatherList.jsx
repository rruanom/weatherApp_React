import React from "react";
import WeatherCard from './WeatherCard'
import { v4 as uuidv4 } from 'uuid';

const WeatherList = ({props, place}) => {
  console.log(props)
  const renderItems = () =>
    props.map((item, i) => (
      <WeatherCard
        key={uuidv4()}
        dataItem={item}
      />
    ));
    return <div>
    <h1>Weather in {place}</h1>
    <ul>
      {renderItems()}
    </ul>
    </div>
};

export default WeatherList;
