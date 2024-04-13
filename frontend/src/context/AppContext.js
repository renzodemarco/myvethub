import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  
  const fetchPatients = () => {
    
  }

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };