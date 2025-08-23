import Search from "./Search";
import styles from "./navbar.module.css";
export default function Navbar({ foodData, setFoodData }) {
  return (
    <div>
      <div className={styles.navCont}>
        <h2>🍔Foo App</h2>
        <Search foodData={foodData} setFoodData={setFoodData} />
        <h2>🤵Login</h2>
      </div>
    </div>
  );
}
