import './Purchasepage.css';
const  Purchase = ({price, onBack}) => {
    return (
      <div className="purchase">
      <h3> Cheers! </h3>
      <p> Your order total is ${price} </p>
      <button onClick={onBack}> Continue Shopping</button>
      </div>
    )
  }
  
  export default Purchase;