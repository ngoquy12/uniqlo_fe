import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import HomePage from "./pages/client/home";
import BackToTop from "./components/backtop";
import Login from "./pages/auth/login/index";
import Register from "./pages/auth/register";
import Cart from "./pages/client/cart";
import ProductDetail from "./pages/client/productDetail";
import Wishlist from "./pages/client/wishlist";
import Checkout from "./pages/client/checkout";
import Member from "./pages/client/member";
import MemberDetail from "./pages/client/member/detail";
import EditProfile from "./pages/client/member/edit";
import MemberAddress from "./pages/client/member/address";
import MemberChangePassword from "./pages/client/member/change-password";
import Order from "./pages/client/member/order";
import PurchaseHistory from "./pages/client/member/purchase-history";
import CouponWallet from "./pages/client/member/coupon-wallet";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          {/* Route members */}
          <Route path="/member" element={<Member />}>
            <Route index element={<MemberDetail />} />
            <Route path="edit" element={<EditProfile />} />
            <Route path="address" element={<MemberAddress />} />
            <Route path="change-password" element={<MemberChangePassword />} />\
            <Route path="orders" element={<Order />} />
            <Route path="purchase/history" element={<PurchaseHistory />} />
            <Route path="coupon-wallet" element={<CouponWallet />} />
            <Route />
            <Route />
          </Route>
        </Route>
      </Routes>
      <BackToTop />
    </>
  );
}
