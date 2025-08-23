import styles from "./fooditem.module.css";
export default function FoodItem({ food }) {
  return (
    <div className={styles.itemCont}>
      <img src={food.image} alt="" className={styles.foodImg} />
      <h1 className={styles.foodItemName}>{food.title}</h1>
    </div>
  );
}
