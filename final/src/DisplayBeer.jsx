import BeerList from './BeerList'; 
import { deleteBeer } from './services'; // Assuming you have a deleteBeer service
import { useState } from 'react';
import './DisplayBeer.css';

const DisplayBeer = ({ userState, onPurchasing, setUserState }) => {
  const [beerState, setBeerState] = useState(Object.values(userState.info));
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState('');
  const removeBeer = (event) => {
    const beerID = event.target.dataset.id;
    deleteBeer(beerID)
      .then((response) => {
        setBeerState(Object.values(response));
        setUserState({
          isLoggedIn: true,
          isBeerOrdering: false,
          isPending: false,
          username: userState.username,
          info: response,
          isPurchasing: false,
        });
      })
      .catch((err) => {
        setStatus(err.error);
      });
  };

//   let content = <div> </div>;

  const Purchase = (event) => {
    const price = event.target.dataset.price;
    onPurchasing(price);
  };

  const savedBeers = beerState.map((beer, index) => (
    <li className="beerList" key={index} data-id={beer.id}>
      <BeerList selectedItems={beer.beerItems} />
      <p className="price"> Price = ${beer.price} </p>
      
      <button data-id={beer.id} onClick={removeBeer}>
        Remove
      </button>
      <button data-id={beer.id} data-price={beer.price} onClick={Purchase}>
        Order
      </button>
      <br />
      <br />
    </li>
  ));

  return <ul className="savedBeers">{savedBeers}</ul>;
};

export default DisplayBeer;
