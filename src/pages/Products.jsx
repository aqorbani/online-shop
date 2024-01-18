import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import { useProducts } from "../context/ProductsContext";
import Loading from "../components/Loading";
import {
  filterProductsByCategory,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBox from "../components/SearchBox";

const Products = () => {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  //Defualt useEffect
  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  //Search and Filter useEffect
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);

    finalProducts = filterProductsByCategory(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  return (
    <div className="items-col bg-white">
      <div className="w-full">header</div>
      <div className="flex w-full  m-5">
        <SearchBox setQuery={setQuery} search={search} setSearch={setSearch} />
      </div>
      <div className="flex-col md:flex md:flex-row-reverse w-full d-">
        <div className="w-full md:w-1/6 p-2">
          <SideBar setQuery={setQuery} />
        </div>
        <div className="flex flex-wrap justify-between items-center w-full md:w-5/6">
          {!displayed.length && <Loading wh={80} />}
          {displayed.map((item) => (
            <ProductsCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
