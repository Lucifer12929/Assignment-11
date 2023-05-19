import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const DescFetch = (slug) => {

    const [desc, setDesc] = useState();
    const getDesc = () => {
      return fetch( `https://api.theinnerhour.com/v1/blogdetail/${slug}`)
      .then(res=> res.json())
      }
  
    const { isLoading:descLoading, refetch: fetchDesc,} = useQuery({
      queryKey: ["description", slug],
      queryFn: () => getDesc(),
      retry: false,
      enabled: false,
      keepPreviousData : true,
      onSuccess: (data) => {
        setDesc(data);
    
      },
      onError: (data) => {
        console.log(data.message);
      },
    });

    return {desc, fetchDesc, descLoading} ;
  }

  export default DescFetch;