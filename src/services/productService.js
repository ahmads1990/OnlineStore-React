import ApiUrls from "../apiUrls.js";

const API_URL = ApiUrls.getAllProducts;

const getAllProducts = async (abortController) => {
    const response = await fetch(API_URL, { signal: abortController.signal });
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return await response.json();
};

const getProductById = async (id, abortController) => {
    const response = await fetch(`${API_URL}/${id}`, { signal: abortController.signal });
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return await response.json();
};

export { getAllProducts, getProductById };
