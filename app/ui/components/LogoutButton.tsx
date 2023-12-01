"use client";
import { useContext } from "react";
import { UserAccount } from "./ContextContainer";

const LogoutButton = ({ children }: { children: React.ReactNode }) => {
  const { userAccount, setUserAccount } = useContext(UserAccount);
  const handleClick = () => {
    setUserAccount({
      name: "",
      credits: 0,
      email: "",
      avatar: "",
      wins: [""],
      _count: { listings: 0 },
    });
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-orange-100 text-gray-600 py-2 px-6">
      {children}
    </button>
  );
};

export default LogoutButton;
