import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import UserMessages from "./UserMessages";
import Recipient from "./Recipient";
import Axios from "axios";

const sendMessage = (name, recipient, title, message) => {
  Axios.post("http://localhost:3001/sendMessage", {
    name: recipient,
    sender: name,
    title,
    message,
  }).then((response) => {
    console.log("Message sent");
  });
};
class MessageForm extends React.Component {
  state = {
    userName: "",
    recipientName: "",
    title: "",
    message: "",
    focus: false,
  };

  handleUserNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  handleRecipientNameChange = (e) => {
    this.setState({
      recipientName: e.target.value,
    });
  };
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  formValidation = () => {
    let userName = false;
    let recipientName = false;
    let title = false;
    let message = false;
    let valid = false;

    if (this.state.userName.length > 2) {
      userName = true;
    }
    if (this.state.recipientName.length > 2) {
      recipientName = true;
    }
    if (this.state.title.length > 2) {
      title = true;
    }
    if (this.state.message.length > 2) {
      message = true;
    }
    if (userName && recipientName && title && message) {
      valid = true;
    }
    return valid;
  };
  handleFocus = () => {
    this.setState({ focus: true });
  };
  handleBlur = () => {
    this.setState({ focus: false });
  };
  handleClick = (e) => {
    e.preventDefault();
    const validation = this.formValidation();

    if (validation) {
      sendMessage(
        this.state.userName,
        this.state.recipientName,
        this.state.title,
        this.state.message
      );
      this.setState({
        title: "",
        message: "",
      });
      console.log("Form submitted");
    } else {
      console.log(
        "Fill the form first. Remeber that you have to fill each input with at least 3 characters"
      );
    }
  };
  render() {
    console.log(this.state.recipientName);
    return (
      <div className="messageForm">
        <Container>
          <Form className="mb-5" onSubmit={this.handleClick}>
            <Row className="mb-5 mt-3 text-center">
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group controlId="yourNameInput">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    value={this.state.userName}
                    onChange={this.handleUserNameChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3 text-center">
              <Col md={{ span: 3, offset: 3 }}>
                <Form.Group controlId="RecipientNameInput">
                  <Form.Label>Recipient name</Form.Label>
                  <Recipient
                    recipient={this.state.recipientName}
                    function={this.handleRecipientNameChange}
                    focus={this.handleFocus}
                    blur={this.handleBlur}
                  />
                </Form.Group>
              </Col>
              <Col md={{ span: 3 }}>
                <Form.Group controlId="titleInput">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="text-center" controlId="textInput">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your message..."
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="text-center mt-2">
              <Col>
                <Button type="submit" size="lg">
                  SEND A MESSAGE
                </Button>
              </Col>
            </Row>
          </Form>
          {this.state.recipientName && !this.state.focus ? (
            <UserMessages
              user={this.state.userName}
              recipient={this.state.recipientName}
              title={this.state.title}
              message={this.state.message}
            />
          ) : null}
        </Container>
      </div>
    );
  }
}
export default MessageForm;
