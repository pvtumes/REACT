function Display({ displayvalue }) {
  return (
    <>
      <input
        type="text"
        className="input-window"
        value={displayvalue}
        readOnly
      />
    </>
  );
}
export default Display;
