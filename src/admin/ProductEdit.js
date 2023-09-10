import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

function ProductEdit(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((product) => {
        setTitle(product.title);
        setPrice(product.price);
        setDetails(product.details);
        setImage(product.image);
      });
    // eslint-disable-next-line
  }, []);

  const submit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/api/products/${props.match.params.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, price, details, image }),
    }).then(() => navigate("/admin/products"));
  };

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          defaultValue={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Details</label>
        <input
          type="text"
          name="details"
          defaultValue={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <label>Image</label>
        <input
          type="text"
          name="image"
          defaultValue={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </Wrapper>
  );
}

export default ProductEdit;
