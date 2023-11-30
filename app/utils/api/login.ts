import fetchFunction from "../fetchFunction";

type UserType = {
  name: string;
  email: string;
  avatar: string;
  credits: number;
  wins: string[];
  _count: {
    listings: number;
  };
};

type stateSetter = React.Dispatch<React.SetStateAction<UserType>>;
const login = async (values: {}, setUserAccount: stateSetter) => {
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
    setUserAccount({ ...rest });
  }
};

export default login;
