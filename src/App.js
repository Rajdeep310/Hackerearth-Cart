import { useContext } from 'react'
import './App.css';

import Items from './Items'
import TotalPriceContainer from './TotalPriceContainer'

import { AppContext } from './Context'

function App() {

  const {newCart,onRefresh,flag} = useContext(AppContext);
  const flagdata = <div className='danger'>Item Removed</div>


  return (
    <div className="App">
      {/* Line 18 displays flag data when flag variable is true */}
      {flag && flagdata}  
      <div className="main-container">
        <Items />

        <TotalPriceContainer />
      </div>
      {/* Reload button for reloading items when all items are removed */}
      {newCart.length === 0 && <button onClick={onRefresh}>Reload All Items</button>}
      
    </div>
  );
}

export default App;
