import React,{ useState } from "react";
import cookesDetail from "./Detail"
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";


const ProductList = (props) => {

  const [query, setQuery] = useState("");

  const productList = products

  .filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
  .map(product => <ProductItem product={product} key={product.id} productts={props.producss}/>)

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
  
    </>
  );
};

export default ProductList;
