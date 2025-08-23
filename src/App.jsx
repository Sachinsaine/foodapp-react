import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <>
      <Navbar foodData={foodData} setFoodData={setFoodData} />
      {/* <Search foodData={foodData} setFoodData={setFoodData} /> */}
      <FoodList foodData={foodData} setFoodData={setFoodData} />
    </>
  );
}

export default App;
