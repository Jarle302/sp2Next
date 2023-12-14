type FetchOptions = {
  method: string;
  headers: any;
  body?: string;
  cache?: string;
};
const fetchFunction = async (url: string, method: string, body?: {}) => {
  const tempToken = localStorage.getItem("token");
  const token = tempToken ? JSON.parse(tempToken) : null;

  let options: FetchOptions = {
    cache: "no-store",
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
  if (body) {
    options = { ...options, body: JSON.stringify(body) };
  }

  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    });
    if (options.method === "DELETE") {
      return;
    }
    const data = await response.json();
    if (data.statusCode > 299) {
      throw data.errors;
    }

    return data;
  } catch (error: any) {
    alert(
      error
        .map((err: { code: string; message: string }) => err.message)
        .join("\n")
    );
  }
};
export default fetchFunction;
