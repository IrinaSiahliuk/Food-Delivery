import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Layout } from "./Layout";
import Router from "./Router";

export const Store = createContext();

function App() {
  const [store, setStore] = useState({
    user: {
      name: '',
      email: '',
      phone: '',
      password: '',
      shoppingCart: []
    }
  });

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Store.Provider value={[store, setStore]}>
          <Layout>
            <Router />
          </Layout>
        </Store.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
