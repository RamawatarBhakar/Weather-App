import { createContext, useRef, useState } from "react";

export const Context = createContext({
  funCall: () => {},
  getData: [],
  city: [],
});
const ContextProvider = ({ children }) => {
  const [getData, setGetData] = useState();
  let err = 0;

  const funCall = async (city) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=455cc6213ef24741949231635252503&q=${city}`
      );

      const data = await response.json();
      setGetData(data);

      if (
        data.error.code == 1006 ||
        getData == undefined ||
        data.error.code == 1003
      ) {
        data.error.code == 1006 ? setGetData(1006) : setGetData(undefined);
      } else {
        setGetData(data);
      }

      const error = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Context.Provider value={{ getData, funCall }}>{children}</Context.Provider>
  );
};
export default ContextProvider;
