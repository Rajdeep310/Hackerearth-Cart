import React, { useContext } from 'react'
import { AppContext } from './Context';

import './TotalPriceContainer.css'
import './App.css'

function TotalPriceContainer() {

    const {newCart} = useContext(AppContext);
    return (
        <div className='totalPriceContainer'>
            <div className='gap'></div>
            <div className="bord">
                <h4 className='line'>Total</h4>
                <div className="line">
                    <div>Items ({newCart.length})</div> : <div>$ </div>
                </div>
                <div className="line">
                   <div> Discount</div> : <div>$ </div>
                </div>
                <div className=" line total">
                 <div> <h3>Order Total</h3>   </div>  :   <h3>$ </h3> 
                </div>

            </div>

        </div>
    )
}

export default TotalPriceContainer
