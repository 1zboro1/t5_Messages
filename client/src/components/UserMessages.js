import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
import Axios from "axios";

function UserMessages(props) {
  const [listOfMessages, setListOfMessages] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getMessages", {
      params: { name: props.recipient },
    }).then((response) => {
      setListOfMessages(response.data);
      console.log(response.data);
    });
  }, [props.recipient]);

  return (
    <Container className="p-0 h-100">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sender name</th>
            <th>Title</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {listOfMessages.map((message) => {
            return (
              <tr key={message._id}>
                <td>{message.sender}</td>
                <td>{message.title}</td>
                <td>{message.message}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserMessages;
