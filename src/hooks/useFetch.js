import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)

  useEffect(()=>{
    const fetchFunc = async () => {
      try{
        const response = await fetch(url)
        const result = await response.json();
        setData(result)
      }catch (error){
        setError(error)
      }
    }
    fetchFunc()
  }, [url])

  return {
    data,
    error
  }
};
