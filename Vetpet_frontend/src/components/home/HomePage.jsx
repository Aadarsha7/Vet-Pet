import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";
import PlaceHolderContainer from "../ui/PlaceHolderContainer";
import Error from "../ui/Error";
import { randomValue } from "../../GenerateCardCode";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("cart_code") == null) {
      localStorage.setItem("cart_code", randomValue);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    api
      .get("/products")
      .then((res) => {
        const data = res.data;
        console.log(data);
        setProducts(data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      {error && <Error error={error} />}
      {loading && <PlaceHolderContainer />}
      {!loading && !error && <CardContainer products={products} />}
    </>
  );
};

export default HomePage;
