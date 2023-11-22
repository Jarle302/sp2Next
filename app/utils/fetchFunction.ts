const fetchFunction = async (url: string, method: string, body: {}) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};
export default fetchFunction;