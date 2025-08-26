import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  function handleRecipe(recipe) {
    // setFood(recipe);
    setFoodId(recipe);
    console.log(recipe);
  }
  return (
    <div className={styles.itemCont}>
      <img src={food.image} alt="" className={styles.foodImg} />
      <h1 className={styles.foodItemName}>{food.title}</h1>
      <button
        className={styles.recipeBtn}
        onClick={() => handleRecipe(food.id)}
      >
        View Recipe
      </button>
    </div>
  );
}
