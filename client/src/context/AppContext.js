import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
