import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../store/DataStore";
const Post = () => {
  const { getData } = useContext(Context);
  const { location, current } = getData;

  return (
    <>
      <div className="card post " style={{ width: "22rem" }}>
        <div className="card-header">
          {location.name} {location.region} {location.country}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Local Time: {location.localtime}</li>
          <li className="list-group-item">
            Today Condition: {current.condition.text}
            <img
              src="https://cdn.weatherapi.com/weather/64x64/day/113.png"
              alt=""
            />
          </li>
          <li className="list-group-item">Temprature: {current.temp_c}c</li>
          <li className="list-group-item">
            Wind Speed: {current.wind_kph} km/h
          </li>

          <li className="list-group-item">Humidity: {current.humidity}</li>
        </ul>
      </div>
    </>
  );
};
export default Post;
