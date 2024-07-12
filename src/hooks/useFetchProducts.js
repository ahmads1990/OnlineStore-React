import { useEffect, useState } from "react";
import { getAllProducts, getProductById } from "../services/productService";

const useFetchProducts = (url, id) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async (id) => {
            try {
                let data;
                if (id) {
                    // data = await getProductById(id, abortController);
                    data = await getAllProducts(abortController);
                    data = data.find((p) => p.Id == id);
                } else data = await getAllProducts(abortController);

                setData(data);
                setIsLoading(false);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setIsLoading(false);
                    setError(error.message);
                }
            }
        };

        fetchData(url);
    }, [url, id]);

    return { data, isLoading, error };
};

export default useFetchProducts;
