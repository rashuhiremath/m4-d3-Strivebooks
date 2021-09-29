import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";

const BookList = ({ books }) => (
  <Container>
    <Row>
      {books.map((book) => (
        <Col col xs={3}>
          <SingleBook />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;
