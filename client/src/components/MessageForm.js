import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import UserMessages from "./UserMessages";

class MessageForm extends React.Component {
  state = {
    userName: "",
    recipientName: "",
    title: "",
    message: "",
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
    if (this.state.message.length > 9) {
      message = true;
    }
    if (userName && recipientName && title && message) {
      valid = true;
    }
    return valid;
  };
  handleClick = (e) => {
    e.preventDefault();
    const validation = this.formValidation();

    if (validation) {
      this.setState({
        userName: "",
        recipientName: "",
        title: "",
        message: "",
      });
      console.log("Form submitted");
      alert("Form submitted");
    } else {
      alert(
        "Fill the form first. Remeber that Your name, Recipient name and title has to be at least 3 characters long. Message lenght must be at least 10 characters"
      );
    }
  };
  render() {
    return (
      <div className="messageForm">
        <Container>
          <Form className="mb-5" onSubmit={this.handleClick}>
            <Row className="mb-5 mt-3">
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
            <Row className="mb-3">
              <Col md={{ span: 3, offset: 3 }}>
                <Form.Group controlId="RecipientNameInput">
                  <Form.Label>Recipient name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Recipient name"
                    value={this.state.recipientName}
                    onChange={this.handleRecipientNameChange}
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
                <Form.Group controlId="textInput">
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
            <Button type="submit" className="mt-2">
              Send
            </Button>
          </Form>
          <UserMessages />
        </Container>
      </div>
    );
  }
}
export default MessageForm;
