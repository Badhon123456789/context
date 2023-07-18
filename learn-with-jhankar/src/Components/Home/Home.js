import React, { useContext } from "react";
import Categories from "../Categories/Categories";
import { CategoryContext } from "../../App";

const Home = () => {
  const category = useContext(CategoryContext);
  const { count, setCount } = category;
  return (
    <div>
      <h1>This is Home : {count}</h1>
      <button onClick={() => setCount("Laptop")}>Laptop</button>
      <button onClick={() => setCount("Mobile")}>Mobile</button>
      <button onClick={() => setCount("Camera")}>Camera</button>
      <Categories />
    </div>
  );
};

export default Home;
