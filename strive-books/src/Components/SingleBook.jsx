import React from "react";
import  Card  from "react-bootstrap/Card";
import fantasy from "../Data/fantasy.json"
import { Button } from "react-bootstrap"


class SingleBook extends React.Component {
    
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={fantasy.img}/>
        <Card.Body>
          <Card.Title>{fantasy.title}</Card.Title>
          <Card.Text>
          {fantasy.category}
          </Card.Text>
          <Button variant="primary">{fantasy.price}</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook