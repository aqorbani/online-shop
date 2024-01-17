import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
