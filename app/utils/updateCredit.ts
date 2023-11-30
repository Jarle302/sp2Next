import fetchFunction from "./fetchFunction";

type stateSetter = React.Dispatch<React.SetStateAction<UserType>>;

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

export default async function updateCredit(
  name: string,
  setUserAccount: stateSetter,
  userAccount: UserType
) {
  const data = await fetchFunction(
    `https://api.noroff.dev/api/v1/auction/profiles/${name}`,
    "GET"
  );

  setUserAccount({ ...userAccount, credits: data.credits });
}
