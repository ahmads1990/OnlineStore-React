const baseApiUrl = import.meta.env.VITE_API_BASE_URL;

const ApiUrls = {
    baseApiUrl: baseApiUrl,
    getAllProducts: baseApiUrl + "/Products",
    getProductById: baseApiUrl + "/Products",
};

export default ApiUrls;
