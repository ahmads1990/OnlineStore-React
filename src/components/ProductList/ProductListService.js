const url = "http://localhost:3001/products";

export function getProductData() {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return [];
        });
}
