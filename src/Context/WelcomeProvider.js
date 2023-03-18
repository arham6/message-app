import { createContext, useState } from "react";

export const WelcomeContext=createContext();

const WelcomeProvider=({children})=>{

    const [welcomeClick,setWelcomeClick]=useState(false);

    return(
        <WelcomeContext.Provider value={{
            welcomeClick,
            setWelcomeClick
        }}>
            {children}
        </WelcomeContext.Provider>
    )
}

export default WelcomeProvider;