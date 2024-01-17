import { useProducts } from "../context/ProductsContext";
const Products = () => {
  const products = useProducts();
  console.log(products)
  return <div>Products</div>;
};

export default Products;
