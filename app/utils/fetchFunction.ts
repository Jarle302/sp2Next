type FetchOptions = {
  method: string;
  headers: any;
  body?: string;
};
const fetchFunction = async (url: string, method: string, body?: {}) => {
  const token = JSON.parse(localStorage.getItem("token") || "");

  let options: FetchOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
  if (body) {
    options = { ...options, body: JSON.stringify(body) };
  }
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  console.log("data", data);
  return data;
};
export default fetchFunction;
