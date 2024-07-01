import "./App.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
    return (
        <>
            <Navbar />
            <ProductList></ProductList>
        </>
    );
};

export default App;
