"use client";

//* React
import React, { useState } from "react";

export const MainContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSerchTerm] = useState("");

  return (
    <MainContext.Provider
      value={{ showMenu, setShowMenu, searchTerm, setSerchTerm }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
