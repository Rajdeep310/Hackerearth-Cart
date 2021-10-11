import { useContext } from 'react'
import './App.css';

import Items from './Items'
import TotalPriceContainer from './TotalPriceContainer'

import { AppContext } from './Context'

function App() {

  const {newCart,flag} = useContext(AppContext);
  const flagdata = <div className='danger'>Item Removed</div>

  return (
    <div className="App">
      {/* Line 17 displays flag data when flag variable is true */}
      {flag && flagdata}  
      <div className="main-container">
        <Items />

        <TotalPriceContainer />
      </div>
    </div>
  );
}

export default App;
