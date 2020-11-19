import React, { Component, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { CartContext } from "../context/Cart";

export default function Produce(props) {
  return (
    <Container>
      <Row>
        {props.data.map((data) => (
          <Col sm="3">
            <Card className="mt-3">
              <CardImg
                top
                width="100%"
                src={data.imageULR}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{data.title}</CardTitle>
                <CardText>{data.description}</CardText>
                <CardText tag="h6">{data.price}</CardText>
                <CartContext.Consumer>
                  {({ addToCart }) => (
                    <Button onClick={() => addToCart(data)}>Add to cart</Button>
                  )}
                </CartContext.Consumer>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
