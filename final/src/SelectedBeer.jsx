const SelectedBeer = ({ selectedItems }) => {
    return (
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.quantity} - ${item.quantity.toFixed(2) * 3.99}
          </li>
        ))}
      </ul>
    );
  };
  
  export default SelectedBeer;