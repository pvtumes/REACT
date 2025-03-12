import Item from "./Item";

function FoodItems({ items }) {
  const handleBuyButtonClicked = (event) => {};
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            handleBuyButtonClicked={() => {
              console.log(`${item} item being bought`);
            }}
            fooditem={item}
          ></Item>
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
