

const ProductItem = (props) => {
  const product = props.product;
  const producss = props.productts;


  return (
    <div className="productWrapper" onClick={()=>producss(product)} >
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
