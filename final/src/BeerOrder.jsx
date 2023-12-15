import { useState } from "react";
import { addBeerToUserList } from "./services";
import { v4 as uuidv4 } from "uuid";
import { accordions } from "./page/Menu";
import "./BeerOrder.css";
const BeerOrder = function ({ userInfo, onBack }) {
  const [status, setStatus] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [beerType, setBeerType] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [quantities, setQuantities] = useState(
    Array(accordions.length).fill(1)
  );
  const [selectedItems, setSelectedItems] = useState([]);
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.quantity * 3.99,
    0
  );
  const [showPurchase, setShowPurchase] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [Price, setPrice] = useState(0);

  const handleTypeChange = (title) => {
    const foundItemIndex = selectedItems.findIndex(
      (item) => item.title === title
    );
    if (foundItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[foundItemIndex].quantity += 1;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { title, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (index, change) => {
    const newSelectedItems = [...selectedItems];
    const foundItem = newSelectedItems.find(
      (item) => item.title === accordions[index].title
    );
    if (foundItem) {
      foundItem.quantity = Math.max(0, foundItem.quantity + change);
    } else if (change > 0) {
      newSelectedItems.push({ title: accordions[index].title, quantity: 1 });
    }
    setSelectedItems(newSelectedItems);
  };

  const save = function () {
    const beerID = uuidv4();
    addBeerToUserList({
      beerID,
      beerItems: selectedItems,
      quantity: quantities,
    })
      .then((response) => {
        userInfo.info = response;
        setStatus("");
        setShowPurchase(true);
        onBack();
      })
      .catch((err) => {
        setStatus(err.error);
      });
  };
  if (showPurchase) {
    return (
      <div>
        <h3> Cheers! </h3>
        <button onClick={onBack}> Continue Shopping</button>
      </div>
    );
  }

  return (
    <div>
      <div className="status">{status}</div>
      <h1> Cheers, {userInfo.username}! Let's Spice Up Your Brew Game </h1>
      <h3> Dive into the hoppy world and and Craft Your Beer Adventure </h3>
      <div>
        <label>
          <div className="main__card">
            {accordions.map((accordion, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleTypeChange(accordion.title)}
              >
                <img
                  className="card__pic"
                  src={accordion.image}
                  alt={accordion.title}
                />
                <p className="card__title">{accordion.title}</p>
                <button
                  className="remove-item"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleQuantityChange(index, -1);
                  }}
                >
                  -
                </button>
                <span className="quantity">
                  {selectedItems.find((item) => item.title === accordion.title)
                    ?.quantity || 0}
                </span>
                <button
                  className="add-item"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleQuantityChange(index, 1);
                  }}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </label>
      </div>
      <div className="container">
        <h4>Selected Items:</h4>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.title} - {item.quantity} - $
              {item.quantity.toFixed(2) * 3.99}
            </li>
          ))}
        </ul>

        <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
        <div className="button-container">
          <button onClick={save}> Save </button>
          <button onClick={onBack}> Back </button>
        </div>
      </div>
    </div>
  );
};

export default BeerOrder;
