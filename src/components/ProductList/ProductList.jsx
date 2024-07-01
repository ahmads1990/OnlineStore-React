import ProductItem from "../ProductItem/ProductItem.jsx";
import productData from "../productData.js";

const ProductList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div>Filter by price</div>
                    <div>Filter by price</div>
                    <div>Filter by price</div>
                    <div>Filter by price</div>
                </div>
                <div className="col">
                    <div className="row px-3 mb-3">{productData.length} Products</div>
                    <div className="row">
                        {productData.map((product) => (
                            <ProductItem key={product.Id} productData={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
