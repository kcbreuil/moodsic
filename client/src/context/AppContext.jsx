import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [songs, setSongs] = useState([]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        songs,
        setSongs
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
