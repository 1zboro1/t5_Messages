import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

class Recipient extends React.Component {
  render() {
    return (
      <Form.Control
        type="text"
        placeholder="Recipient name"
        value={this.props.recipient}
        onChange={this.props.function}
        onFocus={this.props.focus}
        onBlur={this.props.blur}
      />
    );
  }
}
export default Recipient;
