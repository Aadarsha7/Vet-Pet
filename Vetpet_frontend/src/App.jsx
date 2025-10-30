import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./components/home/HomePage";
import NotFoundPage from "./components/ui/NotFoundPage";
import ProductPage from "./components/product/ProductPage";
import LoginPage from "./components/user/LoginPage";
import { useEffect, useState } from "react";
import api from "./api";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import { AuthoProvider } from "./context/AuthContext";
import UserProfilePage from "./components/user/UserProfilePage";
import OrderHistoryFullPage from "./components/user/OrderHistoryFullPage";
import PaymentStatusPage from "./payment/PaymentStatus";
import AppointmentForm from "./components/appointments/AppointmentForm";
import ContactUs from "./components/pages/ContactUs";
import Shop from "./components/pages/Shop";

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
    <AuthoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout numCartItems={numCartItems} />}>
            <Route index element={<HomePage />} />
            <Route
              path="products/:slug"
              element={<ProductPage setNumberCartItems={setNumberCartItems} />}
            />

            <Route
              path="cart"
              element={<CartPage setNumberCartItems={setNumberCartItems} />}
            />
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />

            <Route path="login" element={<LoginPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route
              path="/profile/order-history"
              element={<OrderHistoryFullPage />}
            />
            <Route path="appointment" element={<AppointmentForm/>}/>
            <Route path="Contact-us" element={<ContactUs/>}/>
            <Route path="shop" element={<Shop/>}/>



            <Route path="payment-status" element={<PaymentStatusPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthoProvider>
  );
};

export default App;
