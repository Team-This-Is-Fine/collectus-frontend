import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemDetails(props) {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/collection/${id}`).then((res) => {
      console.log(res.data.item);
      setItemDetails(res.data.item);
    });
  }, [id]);

  return <div></div>;
}

export default ItemDetails;
