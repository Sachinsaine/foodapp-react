import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Router } from "react-router-dom";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <>
      <Navbar foodData={foodData} setFoodData={setFoodData} />
      {/* <Search foodData={foodData} setFoodData={setFoodData} /> */}
      <FoodList
        foodData={foodData}
        setFoodData={setFoodData}
        setFoodId={setFoodId}
      />
    </>
  );
}

export default App;
