import ApiUrls from "../apiUrls.js";

const API_URL = ApiUrls.getAllProducts;

const getAllProducts = async (abortController) => {
    const response = await fetch(API_URL, { signal: abortController.signal });
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const productsResponse = await response.json();

    const updatedProducts = productsResponse.map((product) => ({
        ...product,
        Images: product.Images.map((image) => ({
            ...image,
            imagePath: ApiUrls.baseApiUrl + "/" + image.imagePath,
        })),
    }));
    return updatedProducts;
};

const getProductById = async (id, abortController) => {
    const response = await fetch(`${API_URL}/${id}`, { signal: abortController.signal });
    console.log(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const productResponse = await response.json();
    if (!productResponse) {
        throw new Error("Product not found");
    }
    console.log(productResponse);

    const updatedProduct = {
        ...productResponse,
        Images: productResponse.Images.map((image) => ({
            ...image,
            imagePath: ApiUrls.baseApiUrl + "/" + image.imagePath,
        })),
    };

    return updatedProduct;
};

export { getAllProducts, getProductById };
