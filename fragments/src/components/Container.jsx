import styles from "./Container.module.css";
function Conatainer(props) {
  return (
    <>
      <div className={styles.container}>{props.children}</div>
    </>
  );
}
export default Conatainer;
