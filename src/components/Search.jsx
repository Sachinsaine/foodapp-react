import { useEffect, useState } from "react";
import style from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a9bb03d598814441b4949003d5aeff6c";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query, setFoodData]);
  return (
    <div className={style.inputCont}>
      <div>
        <input
          type="text"
          placeholder="Enter recipe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
