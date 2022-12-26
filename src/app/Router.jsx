import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  AboutUs,
  Menu,
  Discounts,
  ShoppingCart,
  SignUp,
  Delivery,
  PersonalAccount,
} from "pages";
import { ROUTES } from "shared/consts";

function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<AboutUs />} />
      <Route path={ROUTES.MENU} element={<Menu />} />
      <Route path={ROUTES.DISCOUNTS} element={<Discounts />} />
      <Route path={ROUTES.SHOPPING_CART} element={<ShoppingCart />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.DELIVERY} element={<Delivery />} />
      <Route path={ROUTES.PERSONAL_ACCOUNT} element={<PersonalAccount />} />
    </Routes>
  );
}

export default Router;
