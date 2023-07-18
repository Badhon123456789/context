import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Shipment from "./Components/Shipment/Shipment";
import { createContext, useEffect, useState } from "react";

const CategoryContext = createContext();

function App() {
  const stored = JSON.parse(window.localStorage.getItem("count"));

  const [count, setCount] = useState('laptop');

  useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <CategoryContext.Provider value={{ count, setCount }}>
      <div className="App">
        <p>Count: {count}</p>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/header" element={<Header />} />
            <Route exact path="/ship" element={<Shipment />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
export { CategoryContext };
