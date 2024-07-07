import ProductItem from "../ProductItem/ProductItem.jsx";
import useFetch from "../../hooks/useFetch.js";
import ApiUrls from "../../apiUrls.js";

const ProductList = () => {
    const { data: productData, isLoading, error } = useFetch(ApiUrls.getAllProducts);

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
                        {isLoading && (
                            // Loading spinner
                            <div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                        {error && <div className="text-danger">{error}</div>}

                        {productData &&
                            productData.map((product) => <ProductItem key={product.Id} productData={product} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
