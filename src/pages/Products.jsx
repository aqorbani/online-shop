import ProductsCard from "../components/ProductsCard";
import { useProducts } from "../context/ProductsContext";
import Loading from "../components/Loading";

const Products = () => {
  const products = useProducts();
  console.log(products);

  return (
    <div className="items-col bg-white">
      <div className="w-full">header</div>
      <div className="flex-col md:flex md:flex-row-reverse w-full d-">
        <div className="w-full md:w-1/6">sidebar</div>
        <div className="flex flex-wrap justify-between items-center w-full md:w-5/6">
          {!products.length && <Loading wh={80} />}
          {products.map((item) => (
            <ProductsCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
