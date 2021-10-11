import { createContext, useState, useEffect } from "react";
import DataStore from './DataStore';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const { Datas } = DataStore;
    const [newCart, setNewCart] = useState(Datas);
    const [flag, setflag] = useState(false);
    let localdata = newCart;
    console.log(Datas)

    useEffect(() => {

        localStorage.setItem('CartItems', JSON.stringify(localdata))
    }, [newCart]);

    const onRefresh = () => {
        setNewCart(Datas)
    }

    {/* Function to remove an item*/}
    const deleteItem=(id)=>{
        console.log(id)
        setNewCart(newCart.filter((x) => x.id !== id));
        setflag(true);
        setTimeout(()=>{ setflag(false)}, 2000);
    }
     {/* Function for increasing the quantity of an item */}
     const itemAdded = (item) => {
        
        const exist = newCart.find(x => x.id === item.id);
        if (exist) {
            setNewCart(newCart.map(x => x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x))
        }
        else {
            setNewCart([...newCart, { ...item, qty: 1 }]);
        }
    }



    return <AppContext.Provider value={
        {
            Datas,
            onRefresh,
            flag,
            newCart,
            deleteItem,
            itemAdded
        }} >{children}</AppContext.Provider>
    }

export { AppContext, AppProvider }