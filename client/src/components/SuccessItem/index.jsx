import { Link } from "react-router-dom";

function SuccessItem(item) {
  const { image, name, _id, price, quantity } = item;
  const total = price * quantity;

  return (
    <div className="card px-1 py-1">
      <img alt={image} src={`/images/${image}`} />
      <p>{name}</p>

      <div>
        <div>You bought: {quantity} coins! Gotcha!</div>
        <span>You paid: ${total}</span>
      </div>
      <button>
        <Link to={"/"}>Click to proceed</Link>
      </button>
    </div>
  );
}

export default SuccessItem;
