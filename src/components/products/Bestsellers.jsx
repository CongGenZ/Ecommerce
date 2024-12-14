import React from "react";
import Products from "./Products";
import { bestsellers } from "../../data";

const Bestsellers = () => {
  return <Products items={bestsellers} heading="bestsellers" />;
};

export default Bestsellers;
