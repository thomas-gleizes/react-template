import { useEffect, useState } from "react";

const useFetch = (fetch: any, params: any, deps: Array<any>) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const json = await fetch(params).then((response: any) => response.json());

        setData(json);
      } catch (e) {
        console.log("E", e);
      } finally {
        setLoading(false);
      }
    })();
  }, [...deps]);

  return [data, isLoading];
};

export default useFetch;
