function Button({ calculatorButtons }) {
  return (
    <>
      {calculatorButtons.map((item) => (
        <button className="btn">{item}</button>
      ))}
    </>
  );
}
export default Button;
