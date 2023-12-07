
import Products, { Product } from "./Pages/Products";
import { Route, Routes } from "react-router-dom";
import DetailProduct from "./Pages/Detail-Product";



export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/products/:id"
          element={<DetailProduct/>}
        />
      </Routes>
    </>
  );
}
