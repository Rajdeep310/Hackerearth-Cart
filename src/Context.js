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



    return <AppContext.Provider value={
        {
            Datas,
            onRefresh,
            flag,
            newCart
        }} >{children}</AppContext.Provider>
    }

export { AppContext, AppProvider }