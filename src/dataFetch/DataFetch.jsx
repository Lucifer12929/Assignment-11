import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const DataFetch = (page) => {
  const [data, setData] = useState();
   
    const getData = (page = 0, limit = 10) => {
    return fetch( `https://api.theinnerhour.com/v1/customers/resources/articles/list?page=${page}&limit=${limit}`)
    .then(res=> res.json())
    }

  const { isLoading:dataLoading} = useQuery({
    queryKey: ["blog", page],
    queryFn: () => getData(page),
    retry: false,
    keepPreviousData : true,
    onSuccess: (data) => {
      setData(data);
  
    },
    onError: (data) => {
      console.log(data.message);
    },
  });


  return {data, dataLoading};
};



export default DataFetch;
