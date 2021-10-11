import { createContext, useState, useEffect } from "react";
import DataStore from './DataStore';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const { Datas } = DataStore;

    const [flag, setflag] = useState(false);
    console.log(Datas)



    return <AppContext.Provider value={
        {
            Datas,
            flag
        }} >{children}</AppContext.Provider>
}

export { AppContext, AppProvider }