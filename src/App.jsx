import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Layout from "./components/Layout/Layout";
import HomePage from "./HomePage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="all" element={<ProductList />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="add" element={<AddProductForm />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
