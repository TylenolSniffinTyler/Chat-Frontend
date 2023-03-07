import { createContext, useContext, useEffect, useState } from "react";

export const ActiveContext = createContext()


export const ActiveContextProvider = ({children})=>{
    const [activeComponent, activate] = useState(null)
    const [activeSetting, setSettings] = useState({
        user : null
    })
    return(
        <ActiveContext.Provider value={{activeComponent, activate, activeSetting, setSettings}}>
            {children}
        </ActiveContext.Provider>
    )
} 