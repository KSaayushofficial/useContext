import { createContext } from "react";
import Counter from "./Counter";

export const Data = createContext();
export const Data1 = createContext();

function App() {
const name = "Aayush KS";
const age = 19;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <Counter />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App
