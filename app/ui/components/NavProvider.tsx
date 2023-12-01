"use client";

type NavState = { isSmallScreen: boolean; isVisible: boolean };

import React, { useContext, useState, useEffect } from "react";

type NavType = {
  navState: NavState;
  setNavState: React.Dispatch<React.SetStateAction<NavState>>;
};

export const NavContext = React.createContext<NavType>({
  navState: { isSmallScreen: false, isVisible: false },
  setNavState: () => {},
});
let isWindowBig = false;
const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [navState, setNavState] = useState({
    isSmallScreen: true,
    isVisible: false,
  });

  useEffect(() => {
    const isWindowBig =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches;
    setNavState({ isSmallScreen: !isWindowBig, isVisible: isWindowBig });
  }, []);

  return (
    <NavContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
