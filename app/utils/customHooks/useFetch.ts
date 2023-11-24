import { useEffect, useState } from "react";

const useFetch = (url: string, filterFunction: Function) => {
  const [data, setData] = useState(["loading..."]);

  useEffect(() => {
    fetch(url, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "custom hook");
        setData(filterFunction ? data.filter(filterFunction) : data);
      });
  }, [url]);

  return data;
};

export default useFetch;
