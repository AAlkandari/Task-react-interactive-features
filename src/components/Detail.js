import React from 'react'


function Detail(props) {
    console.log("props", props.product.name)
    return (
        <div className="productWrapper">
        <img alt={props.product.name} src={props.product.image} />
        <p>{props.product.name}</p>
        <p>{props.product.description}</p>
        <p className="product-price">{props.product.price} KD</p>
      </div>
    )
}

export default Detail


//function cookesDetail() {
   // return (
     //   <div classname="detail" onClick={() => products(products)}>
       //     <h3>{products.description}</h3>
           
        //<///div>
    //)
//}


