import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const API = "http://localhost:3000/data";

  const [data, setData] = useState([]);

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    readProduct();
  }
  async function readProduct() {
    let { data } = await axios(API);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }
  const values = {
    addProduct,
    readProduct,
    data,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
