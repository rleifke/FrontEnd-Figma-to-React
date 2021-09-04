import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle(!toggle);
  };
  //
  //
  const [indexFarm, setIndexFarm] = useState(0);
  const handleIndexFarm = () => {
    if (indexFarm < 2) {
      setIndexFarm(indexFarm + 1);
    } else {
      setIndexFarm(2);
    }
  };
  const handleBackIndexFarm = () => {
    setIndexFarm(indexFarm - 1);
  };
  return (
    <AppContext.Provider
      value={{
        toggleNav,
        toggle,
        handleIndexFarm,
        indexFarm,
        handleBackIndexFarm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
