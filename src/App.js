import React from "react";
import Products from "./admin/Products";
import Main from "./main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCreate from "./admin/ProductCreate";
import ProductEdit from "./admin/ProductEdit";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/admin/products" exact element={<Products />} />
          <Route
            path="/admin/products/create"
            exact
            element={<ProductCreate />}
          />
          <Route
            path="/admin/products/:id/edit"
            exact
            element={<ProductEdit />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
