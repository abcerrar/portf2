import { createContext, useState } from "react";

export const SharedContext = createContext();

export const SharedContextProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState('');
  const [sharedData2, setSharedData2] = useState('');

  const context_value = {
	sharedData,
	setSharedData,
	sharedData2,
	setSharedData2,
  }

  return (
    <SharedContext.Provider value={context_value}>
      {children}
    </SharedContext.Provider>
  );
};