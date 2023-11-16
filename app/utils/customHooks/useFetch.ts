import { useEffect, useState } from 'react';

const useFetch = (url, filterFunction) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data,"custom hook");
        setData(filterFunction ? data.filter(filterFunction) : data);
      });
  }, [url]);

  return data;
};

export default useFetch;