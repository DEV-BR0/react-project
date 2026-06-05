import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(api) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getApi() {
      try {
        setLoading(true);
        const data = await axios.get(api);
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.msg);
      } finally {
        setLoading(false);
      }
    }

    getApi();
  }, [api]);
  return { loading, data, error };
}

export default useAxios;
