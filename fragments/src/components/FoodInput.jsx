import styles from "./FoodInput.module.css";

export default function FoodInput({ handleOnChange }) {
 
  return (
    <>
      <input
        onKeyDown={handleOnChange}
        type="text"
        placeholder="Enter your food.."
        className={styles.Foodinput}
      />
    </>
  );
}
