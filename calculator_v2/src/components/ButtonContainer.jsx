import Button from "./Button";

function ButtonContainer({ calculatorButtons, onButtonClick }) {
  return (
    <div className="btn-container">
      {calculatorButtons.map((item) => (
        <Button key={item} value={item} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
}

export default ButtonContainer;
