
import './App.css';

import Items from './Items'
import TotalPriceContainer from './TotalPriceContainer'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Items />

        <TotalPriceContainer />
      </div>
    </div>
  );
}

export default App;
