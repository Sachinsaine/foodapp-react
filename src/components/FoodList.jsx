import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";
export default function FoodList({ foodData }) {
  return (
    <div className={styles.foodItemCont}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
