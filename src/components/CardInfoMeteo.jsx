import { Container, Row } from "react-bootstrap";
function CardInfoMeteo(props) {
  return (
    <Container className="py-2 my-2">
      <Row className="color p-3 justify-content-center text-center">
        <h6>today at: {props.hour}</h6>
        <p className="fw-bold">{props.weather}</p>
        <div className="rounded-circle img-cont text-center my-3">
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}.png`}
            alt="sun"
            className="w-100 h-100 object-fit-cover p-1 m-0"
          />
        </div>
        <p className="fw-bold small">{props.description}</p>
        <p className="small">Humidity: {props.humidity}%</p>
        <p className="small">Temp: {props.temp}°</p>
      </Row>
    </Container>
  );
}

export default CardInfoMeteo;
