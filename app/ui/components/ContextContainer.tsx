"use client";

import React, { useState, useEffect } from "react";
type UserAccountType = {
  userAccount: UserType;
  setUserAccount: React.Dispatch<React.SetStateAction<UserType>>;
};

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

let profile;
if (typeof window !== "undefined") {
  const tempProfile = localStorage.getItem("profile");
  if (tempProfile) {
    profile = JSON.parse(tempProfile);
  }
}

const userAccount = profile
  ? profile
  : {
      name: "",
      email: "user@example.com",
      avatar: "",
      credits: 0,
      wins: ["string"],
      _count: {
        listings: 0,
      },
    };

export const UserAccount = React.createContext<UserAccountType>({
  userAccount,

  setUserAccount: () => {},
});

const ContextContainer = ({ children }: { children: React.ReactNode }) => {
  const [userAccount, setUserAccount] = useState<UserType>({
    name: "",
    email: "user@example.com",
    avatar: "",
    credits: 0,
    wins: ["string"],
    _count: {
      listings: 0,
    },
  });

  const context: UserAccountType = { userAccount, setUserAccount };

  useEffect(() => {
    if (typeof window !== "undefined" && userAccount.name) {
      localStorage.setItem("profile", JSON.stringify(userAccount));
    }
  }, [userAccount]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let profile;
      const tempProfile = localStorage.getItem("profile");
      if (tempProfile) {
        profile = JSON.parse(tempProfile);
        setUserAccount(profile);
      }
    }
  }, []);

  return (
    <div>
      <UserAccount.Provider value={context}>{children}</UserAccount.Provider>
    </div>
  );
};

export default ContextContainer;
