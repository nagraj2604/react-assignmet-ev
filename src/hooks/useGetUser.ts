import { useState } from "react";
import axios from "axios";
export const useGetUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSucess, setSucess] = useState(false);
  const [data, setData] = useState<any>();
  const callAPI = async () => {
    setSucess(false);
    setLoading(true);
    try {
      let user = await axios.get("https://randomuser.me/api");
      setLoading(false);
      setData(user?.data?.results);
      setSucess(true);
    } catch (error) {
      setError(true);
      setLoading(false);
      setSucess(false);
    }
  };
  return {
    callAPI,
    isLoading,
    isSucess,
    error,
    data,
  };
};
