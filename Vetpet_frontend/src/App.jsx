import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./components/home/HomePage";
import NotFoundPage from "./components/ui/NotFoundPage";
import ProductPage from "./components/product/ProductPage";
import { useEffect, useState } from "react";
import api from "./api";
import CartPage from "./components/cart/CartPage";

const App = () => {
  const [numCartItems, setNumberCartItems] = useState(0);
  const cart_code = localStorage.getItem("cart_code");

  useEffect(
    function () {
      if (cart_code) {
        api
          .get(`get_cart_stat?cart_code=${cart_code}`)
          .then((res) => setNumberCartItems(res.data.num_of_items))
          .catch((error) => console.log(error.message));
      }
    },
    [cart_code]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout numCartItems={numCartItems} />}>
          <Route index element={<HomePage />} />
          <Route
            path="products/:slug"
            element={<ProductPage setNumberCartItems={setNumberCartItems} />}
          />

          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
