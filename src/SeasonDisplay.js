import React from "react";
import "./SeasonDisplay.css";

const getSeasonData = (lat, month) => {
  console.log(month);
  const season = {};
  if (month === 3 || month === 4 || month === 5) {
    lat > 0
      ? (season.text = "Ume are blossoming") &&
        (season.image = "../seasonImages/spring.gif") &&
        (season.season = "spring")
      : (season.text = "Momiji are falling") &&
        (season.image = "../seasonImages/fall.gif") &&
        (season.season = "Fall");
  } else if (month === 6 || month === 7 || month === 8) {
    lat > 0
      ? (season.text = "Koi are swimming") &&
        (season.image = "./seasonImages/summer.gif") &&
        (season.season = "summer")
      : (season.text = "Snow is piling") &&
        (season.image = "./seasonImages/winter.gif") &&
        (season.season = "winter");
  } else if (month === 9 || month === 10 || month === 11) {
    lat < 0
      ? (season.text = "Ume are blossoming") &&
        (season.image = "../seasonImages/spring.gif") &&
        (season.season = "spring")
      : (season.text = "Momiji are falling") &&
        (season.image = "../seasonImages/fall.gif") &&
        (season.season = "fall");
  } else if (month === 12 || month === 1 || month === 2) {
    lat < 0
      ? (season.text = "Koi are swimming") &&
        (season.image = "./seasonImages/summer.gif") &&
        (season.season = "summer")
      : (season.text = "Snow is piling") &&
        (season.image = "./seasonImages/winter.gif") &&
        (season.season = "winter");
  }
  console.log(season);
  return season;
};

const SeasonDisplay = props => {
  const season = getSeasonData(props.lat, 9);

  return (
    <div className="season-display">
      <h1>
        It's {season.season}, {season.text}
        <span className="blink-ellipsis">...</span>
      </h1>
      <img alt="season" src={season.image} />
    </div>
  );
};

export default SeasonDisplay;
