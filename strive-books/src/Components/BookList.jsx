import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
 

const BookList = ({ books }) => (
  <Container>
    <Row>
      {books.map((book) => (
        <Col  xs={3}>
          
   <SingleBook  string = {book}/> 

        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;
