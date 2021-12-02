import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Shipment from "./components/Shipment";

export const categoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <h1>This is App Component</h1>
      <h1>Count: {category}</h1>
      <Header />
      <Home />
      <Shipment />
    </categoryContext.Provider>
  );
}

export default App;
