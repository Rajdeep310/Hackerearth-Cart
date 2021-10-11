import { createContext, useState, useEffect } from "react";
import DataStore from './DataStore';

const AppContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem('CartItems'));

const AppProvider = ({ children }) => {

    const { Datas } = DataStore;
    const [newCart, setNewCart] = useState(cartFromLocalStorage);
    const [flag, setflag] = useState(false);
    let localdata = newCart;
    let fictionDiscount;

    const totalPrice = newCart.reduce((a, c) => a + c.price * c.qty, 0);
    const discountPrice = newCart.reduce((a, c) => a + c.discount * c.qty, 0);


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


    {/* Function for decreasing the quantity of an item */}
    const itemRemoved = (item) => {
        const exist = newCart.find((x) => x.id === item.id);
        if (exist.qty === 1) {
            setNewCart(newCart.filter((x) => x.id !== item.id))
            setflag(true);
        setTimeout(()=>{ setflag(false)}, 2000);
        }
        else {
            setNewCart(newCart.map(x => x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x))
        }

    }


    {/* Function for calculating discount for items having type='fiction' */}
    const calculateFictionDiscount=()=>{
        let fifteenPercentDiscount=0,fictionAmount=0;
        for(let i=0;i<newCart.length;i++){
            
            if(newCart[i].type==='fiction')
            fictionAmount+=newCart[i].price *newCart[i].qty
            fifteenPercentDiscount=fictionAmount*0.85
        }
        fictionDiscount=fictionAmount-fifteenPercentDiscount
    }

    calculateFictionDiscount();


    return <AppContext.Provider value={
        {
            Datas,
            flag,
            newCart,
            totalPrice,
            discountPrice,
            fictionDiscount,
            onRefresh,
            deleteItem,
            itemAdded,
            itemRemoved,
        }} >{children}</AppContext.Provider>
    }

export { AppContext, AppProvider }