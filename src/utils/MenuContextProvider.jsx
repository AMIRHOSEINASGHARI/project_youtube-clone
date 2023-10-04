"use client";

//* React
import React, { useState } from "react";

export const MenuContext = React.createContext();

const MenuContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
