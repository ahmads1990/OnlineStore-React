import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                if (!response.ok) {
                    throw Error("could not fetch the data for that resource");
                }
                const data = await response.json();
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
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;
