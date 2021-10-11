import { useContext } from 'react'
import './App.css';

import Items from './Items'
import TotalPriceContainer from './TotalPriceContainer'

import { AppContext } from './Context'


function App() {

  const NewData = useContext(AppContext);
  console.log(NewData)

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
