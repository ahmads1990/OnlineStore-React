import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Layout from "./components/Layout/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ProductList />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="add" element={<AddProductForm />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
