import { Col, Container, Nav, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DailyMeteo from "./components/DailyMeteo";
import InfoMeteo from "./components/InfoMeteo";

// Importa le immagini di sfondo
import sunnyBackground from './assets/sunny.avif';
import cloudyBackground from './assets/cloudy.avif';
import rainyBackground from './assets/rainy.jpg';
import snowyBackground from './assets/snow.jpg';

function App() {
  const [searchQuery, setSearchQuery] = useState("Castellammare di Stabia");
  const [changeCity, setChangeCity] = useState("");
  const [weather, setWeather] = useState(""); // Stato per il clima

  const getBackgroundImage = () => {
    switch (weather) {
      case 'Clear':
        return `url(${sunnyBackground})`;
      case 'Clouds':
        return `url(${cloudyBackground})`;
      case 'Rain':
        return `url(${rainyBackground})`;
      case 'Snow':
        return `url(${snowyBackground})`;
      default:
        return `url(${sunnyBackground})`; // Default image
    }
  };

  return (
    <div className="app-container">
      <div className="background" style={{ backgroundImage: getBackgroundImage() }}>
        <div className="bg-color font-s text-center py-3 fw-bold">World Wide Weather 24 </div>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={4} className="text-center">
              <Form className="my-3 mx-2">
                <Container>
                  <Row>
                    <Col xs={11} className="auto px-0">
                      <Form.Control
                        type="text"
                        placeholder="search location"
                        className="mr-sm-2 rounded-5 search-bar border-0 py-2 ps-4"
                        value={changeCity}
                        onChange={e => setChangeCity(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            setSearchQuery(changeCity);
                            setChangeCity("");
                          }
                        }}
                      />
                    </Col>
                    <Col xs={1} className="auto px-0 text-end">
                      <button
                        className="btn px-0"
                        type="button"
                        onClick={() => {
                          setSearchQuery(changeCity);
                          setChangeCity("");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                      </button>
                    </Col>
                  </Row>
                </Container>
              </Form>
              <DailyMeteo searchQuery={searchQuery} onWeatherUpdate={setWeather} />
            </Col>
            <Col xs={12} md={8} className="text-center">
              <Container className="d-flex justify-content-evenly my-3">
                <Nav>
                  <Nav.Item className={searchQuery === "milan" ? "h4 bg my-0 here" : "h4 bg my-0"}>
                    <Nav.Link
                      className="py-0"
                      onClick={() => {
                        setSearchQuery("milan");
                      }}
                    >
                      Milan
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="space mx-1 my-0"></Nav.Item>
                  <Nav.Item className="h4 bg my-0">
                   
                    
                    
                  </Nav.Item>
               

                  <Nav.Item className="h4 bg my-0">
                    <Nav.Link
                      className="py-0"
                      onClick={() => {
                        setSearchQuery("rome");
                      }}
                    >
                      Rome
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="space my-0 mx-1"></Nav.Item>

                  <Nav.Item className="h4 bg my-0">
                    <Nav.Link
                      className="py-0"
                      onClick={() => {
                        setSearchQuery("naples");
                      }}
                    >
                      Naples
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="space my-0 mx-1"></Nav.Item>

                  <Nav.Item className="h4 bg my-0">
                    <Nav.Link
                      className="py-0"
                      onClick={() => {
                        setSearchQuery("palermo");
                      }}
                    >
                      Palermo
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Container>
              <InfoMeteo searchQuery={searchQuery} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-color text-center py-3 mt-5">@MeteoMarco2024</div>
    </div>
  );
}

export default App;
