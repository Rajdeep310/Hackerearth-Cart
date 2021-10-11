import React, { useContext } from 'react'
import { AppContext } from './Context';
import SingleItem from './SingleItem';

import './Items.css'
import './App.css'

function Items() {

    const { newCart } = useContext(AppContext);

    return (
        <div className='Items'>
            <div className="header"> - Order Summary </div>
            <div className="details">

                <div className="flex-3">
                    Items ({newCart.length})
            </div>

                <div className="flex-1">
                    Qty
            </div>

                <div className="price">
                    Price
            </div>

            </div>
            {newCart.map((item) => {
                const { id } = item;

                return (

                    <SingleItem key={id} {...item} />

                )
            })}

        </div>
    )
}

export default Items
