import { Col, Container, Row } from "react-bootstrap";

function CardSmallMeteo(props) {
  return (
    <Container className="color py-2 my-2">
      <Row>
        <Col className="col-8 d-flex align-items-center">
          <div className="rounded-circle img-container me-3">
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}.png`}
              alt=""
              className="w-100 h-100 object-fit-cover "
            />
          </div>
          <div>
            <div className="text-start my-1 mb-2">{props.date}</div>
            <h5 className="fw-bold small">
              {props.day} | <span className="fw-medium">{props.description}</span>
            </h5>
          </div>
        </Col>
        <Col className="col-4">
          <p>{props.percentage}%</p>
          <p>{props.temp}°</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CardSmallMeteo;
