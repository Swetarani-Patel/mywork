import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";
import ProductList from "./ProductList";
import { getProductData } from "../api/api";
import Loader from "./Loader";
import Error from "./Error";
import "./Products.css";

function Products() {
  const [state, dispatch] = useReducer(ProductReducer, {
    loading: false,
    error: false,
    data: [],
  });

  useEffect(() => {
    dispatch({ type: "LOADING" });
    getProductData(dispatch);
  }, []);

  return (
    <div>
      <h1 className="products-header">Product List</h1>
      {state.loading ? (
        <Loader />
      ) : state.error ? (
        <Error />
      ) : (
        <div className="products-container">
          {state.data.map((ele) => {
            return <ProductList key={ele.id} ele={ele} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
