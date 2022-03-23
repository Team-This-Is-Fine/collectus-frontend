import React from 'react';
import { Carousel, Card, Col, Container, Row } from 'react-bootstrap';

export default function ItemsCarousel({ collection })
{

  return (
    <Carousel style={{ minHeight: "25vh" }}>
      {collection.item.map((item, index) =>
      {
        return (
          <Carousel.Item key={index} style={{ maxHeight: "25vh" }}>
            <Carousel.Caption>
              <h3>{item.name}</h3>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              style={{
                height: "25vh",
                width: "50%",
                objectFit: "cover",
                overflow: "hidden"
              }}
              src={item.img}
              alt={item.name}
            />
            <Carousel.Caption>
              <h3>{item.description}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}
