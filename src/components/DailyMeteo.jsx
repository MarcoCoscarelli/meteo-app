import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardSmallMeteo from "./CardSmallMeteo";

function DailyMeteo({ searchQuery, onWeatherUpdate }) {
  const [days, setDays] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=6704139eec1936a1a792ca1e00257325&units=metric`;
  const urlFail = `https://api.openweathermap.org/data/2.5/forecast?q=bologna&appid=6704139eec1936a1a792ca1e00257325&units=metric`;

  function fetchMeteo(url) {
    fetch(url)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          alert("Ops, la città è inesistente");
          return fetchMeteo(urlFail);
        }
      })
      .then(obj => {
        const currentWeather = obj.list[0].weather[0].main; // Estrai il clima attuale
        setDays(obj);
        onWeatherUpdate(currentWeather); // Passa il clima al componente principale
      })
      .catch(error => {
        console.log("Errore", error);
      });
  }

  useEffect(() => {
    if (searchQuery !== "") {
      fetchMeteo(url);
    }
  }, [searchQuery]);

  return (
    <>
      {days === "" && <Spinner animation="border" />}
      {days !== "" && days !== undefined && (
        <Container>
          <h3>{days.city.name} next days</h3>
          {days.list.map(day => {
            if (day.dt_txt.charAt(12) === "0") {
              return (
                <CardSmallMeteo
                  date={new Date(day.dt_txt).toLocaleDateString("en-EN", { weekday: "long" })}
                  key={day.dt}
                  day={day.weather[0].main}
                  icon={day.weather[0].icon}
                  description={day.weather[0].description}
                  percentage={day.main.humidity}
                  temp={day.main.temp}
                />
              );
            }
            return null;
          })}
        </Container>
      )}
    </>
  );
}

export default DailyMeteo;


