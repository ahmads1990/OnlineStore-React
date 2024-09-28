import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProductForm from "./components/AddProductForm/AddProductForm";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/add" element={<AddProductForm />} />
            </Routes>
        </>
    );
};

export default App;
