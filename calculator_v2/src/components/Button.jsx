function Button({ value, onButtonClick }) {
  return (
    <button onClick={() => onButtonClick(value)} className="btn">
      {value}
    </button>
  );
}

export default Button;
