import { useEffect, useState } from "react";

const useFetchData = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data);
      } catch (_e) {
        const e = _e as Error;
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url])

  return {
    isLoading,
    data,
    error
  }
}

export default useFetchData;