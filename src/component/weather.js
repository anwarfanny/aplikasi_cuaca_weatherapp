import React from "react";

const Weather = (props) => (
  <div className="waether_info">
    {props.city && props.country && (
      <p className="weather_key">
        Location :{" "}
        <span className="weather_value">
          {props.value}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather_key">
        Temperature :{" "}
        <span className="weather_value">{props.temperature}&nbsp;&#176;C</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather_key">
        Humidity : <span className="weather_value">{props.humidity} %</span>
      </p>
    )}
    {props.weather && (
      <p className="weather_key">
        Weather : <span className="weather_value">{props.weather}</span>
      </p>
    )}
    {props.wind && (
      <p className="weather_key">
        Wind : <span className="weather_value">{props.wind} m/s</span>
      </p>
    )}
    {props.sunset && (
      <p className="weather_key">
        Sunset :{" "}
        <span className="weather_value">
          {new Date(props.sunset).toLocaleDateString()}
        </span>
      </p>
    )}
    {props.sunrise && (
      <p className="weather_key">
        Sunrise :{" "}
        <span className="weather_value">
          {new Date(props.sunrise).toLocaleDateString()}
        </span>
      </p>
    )}
    {props.error && <p className="weather_error">{props.error}</p>}
  </div>
);
export default Weather;
