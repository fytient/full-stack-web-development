
import SelectedBeer from './SelectedBeer';
const BeerList = ({ selectedItems }) => {
  

  return (
    <div className="container">
      <h4>Selected Items:</h4>
      <SelectedBeer selectedItems={selectedItems} />
    </div>
  );
};


  export default BeerList;
  