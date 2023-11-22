import { useState, useEffect } from "react";
const useLocalStorage = (key: string, valueToStore?: any) => {
  const [storageValue, setStorageValue] = useState();

  useEffect(() => {
    const item: string|boolean = window.localStorage.getItem(key) || false;
    if (!item && valueToStore) {
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } else item && setStorageValue(JSON.parse(item));
  }, []);

  return storageValue;
};

export default useLocalStorage;
