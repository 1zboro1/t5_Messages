import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

function Recipient(props) {
  return (
    <Form.Group controlId="RecipientNameInput">
      <Form.Label>Recipient name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Recipient name"
        value={props.recipient}
        onChange={props.function}
      />
    </Form.Group>
  );
}
export default Recipient;
