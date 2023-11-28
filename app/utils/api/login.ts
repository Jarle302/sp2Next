import fetchFunction from "../fetchFunction";

const login = async (values: {}) => {
  const item = await fetchFunction(
    "https://api.noroff.dev/api/v1/auction/auth/login",
    "POST",
    values
  );
  console.log("item", item);
  const { accessToken, ...rest } = item;
  if (accessToken) {
    localStorage.setItem("token", JSON.stringify(accessToken));
    localStorage.setItem("profile", JSON.stringify({ ...rest }));
  }
};

export default login;
