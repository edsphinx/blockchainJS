import { useState, useEffect } from "react";
import Axios from "axios";

const useFetch = (url, options) => {
  const [isloading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const doFetch = async () => {
    Axios.get(url, {})
      .then(response => {
        setResult(response.data);
      })
      .catch(err => {
        setError(err.response.data);
      });

    setIsLoading(false);
  };

  useEffect(() => {
    doFetch();
  }, [options, url]);

  return {
    isloading,
    result,
    error,
    doFetch: doFetch
  };
};

export default useFetch;
