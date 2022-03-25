import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function ItemDetails({}) {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:8000/api/collections/${id}`).then((res) => {
      console.log(res);
      //   setItemDetails(...res.data.item });
    });
  }, []);

  if (!itemDetails) {
    return "...Loading";
  }
  console.log(itemDetails);

  return (
    <>
      {itemDetails.map((details, index) => {
        return (
          <Container key={index}>
            <Row>{details.img}</Row>
            <Row>{details.name}</Row>
            <Row>{details.description}</Row>
            <Row>{details.duplicates}</Row>
          </Container>
        );
      })}
    </>
  );
}

export default ItemDetails;
