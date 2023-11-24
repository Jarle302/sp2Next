const fetchFunction = async (url: string, method: string, body: {}) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
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
