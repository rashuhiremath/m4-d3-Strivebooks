import React from "react";
import  Card  from "react-bootstrap/Card";
import fantasy from "../Data/fantasy.json"
import { Button } from "react-bootstrap"


class SingleBook extends React.Component {
    
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.book.img}/>
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>
          {this.props.book.category}
          </Card.Text>
          <Button variant="primary">{this.props.book.price}</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook