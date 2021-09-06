import { useState, useCallback } from "react";

const useHttp = () => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [error, setError] = useState(null);

  const httpRequest = useCallback(async (requestConfig, applyDataFn) => {
    setLoadingStatus(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyDataFn(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setLoadingStatus(false);
  }, []);

  return {
    loadingStatus,
    error,
    httpRequest,
  };
};

export default useHttp;
