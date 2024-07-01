import ProductItem from "./ProductItem";
import "./Product.css";
import productData from "./productData.js";

const ProductList = () => {
    return (
        <div className="product-list container">
            <div className="row">
                {productData.map((product) => (
                    <ProductItem key={product.Id} productData={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
