import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem.jsx";

import { getProductData } from "./ProductListService.js";

const ProductList = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchProductData = async () => {
            const result = await getProductData();
            setProductData(result);
            console.log(productData);
        };
        fetchProductData();
        console.log(productData);
    }, []);

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
