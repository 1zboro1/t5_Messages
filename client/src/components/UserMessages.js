import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

class UserMessages extends React.Component {
  state = {
    userName: "",
  };
  render() {
    return (
      <Container className="p-0 h-100">
        <Row className="h-100">
          <Col className="square border border-3 border-dark h-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit nihil consectetur, omnis architecto quia accusamus voluptatibus veritatis maiores asperiores exercitationem magni fugiat sed nulla! Repellendus officiis esse rem accusantium?
          </Col>
        </Row>
      </Container>
    );
  }
}
export default UserMessages;
