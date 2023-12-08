import { Route, Routes } from "react-router-dom";

import Products from "./Pages/Products";
import DetailProduct from "./Pages/DetailProduct";
import FormProduct from "./component/FormProduct";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/products/:id"
          element={<DetailProduct/>}
        />
        <Route path="/postProduct" element={<FormProduct/>}/>
      </Routes>
    </>
  );
}
