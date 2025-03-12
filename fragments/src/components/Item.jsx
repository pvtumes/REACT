import styles from "./Item.module.css"; // Import as a module

function Item(props) {
  
  return (
    <>
      <li className={`${styles.custom} list-group-item`}>
        <span>{props.fooditem}</span>
        <button
          type="button"
          className={`${styles.button} btn btn-info`}
          onClick={props.handleBuyButtonClicked}
        >
          Info
        </button>
      </li>
    </>
  );
}

export default Item;
