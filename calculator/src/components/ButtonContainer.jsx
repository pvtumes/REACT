import Button from "./Button";

function ButtonContainer({ calculatorButtons }) {
  return (
    <>
      <div className="btn-container">
        <Button calculatorButtons={calculatorButtons}></Button>
      </div>
    </>
  );
}
export default ButtonContainer;
