import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </>
    );
};

export default App;
