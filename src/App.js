
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import Detail from './components/Detail'
import products from "./products";
import { useState } from "react";



function App() {
  const [cookie, setCookie] = useState(null);

const printCookie = (product) => {

  setCookie(product)

}
const product = products[0]
  return (
    <div>
      <Home />
      <ProductList producss={printCookie}/>
      {cookie && <Detail product={cookie}/>}
    </div>
  );
}

export default App;
