import ProductsCard from "../components/ProductsCard";
import { useProducts } from "../context/ProductsContext";
const Products = () => {
  const products = useProducts();
  console.log(products);

  return (
    <div className="items-col bg-gray-200">
      <div className="w-full">header</div>
      <div className="flex w-full">
        <div className="flex flex-wrap justify-between items-center w-10/12">
          {!products.length && <p>Loading . . .</p>}
          {products.map((item) => (
            <ProductsCard key={item.id} data={item} />
          ))}
        </div>
        <div className="w-1/4">sidebar</div>
      </div>
    </div>
  );
};

export default Products;
