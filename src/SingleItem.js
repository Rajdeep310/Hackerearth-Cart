import React, { useContext } from 'react'
import { AppContext } from './Context';
import './Items.css'

function SingleItem(item) {

    const {itemAdded,itemRemoved, deleteItem } = useContext(AppContext);
    const { name, price, qty, img_url, id } = item;
    const totalPrice = price * qty;
    return (
        <div key={id} className='single-item bord' >
            <div className="flex-3 bord">
                <img src={img_url} alt={name} />
                <p >{name}</p>
                <div className='pointer' onClick={() => deleteItem(id)}>X</div>
            </div>

            <div className="flex-1  ">
                <h2 className='mid pointer grey-hover' onClick={() => itemAdded(item)}>+</h2>
                <h4 className='mid'><div className=" max bord">{qty}</div></h4>
                <h2 className='mid pointer grey-hover' onClick={() => itemRemoved(item)}>-</h2>
            </div>
            {/* Printing total price = Price of single item * number of items */}
            <div style={{ justifyContent: 'center' }} className="flex-1 ">${totalPrice}</div>
            {/* For price of single item , variable price should be used */}
        </div>
    )
}

export default SingleItem
