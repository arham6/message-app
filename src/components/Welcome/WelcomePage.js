import React from 'react'
import { useContext } from 'react' 
import { WelcomeContext } from '../../Context/WelcomeProvider'
import { AccountContext } from '../../Context/AccountProvider';
import WelcomePageStyle from "./WelcomePage.module.css"

export default function WelcomePage() {

    const {setWelcomeClick}=useContext(WelcomeContext);
    const {account}=useContext(AccountContext);

    const ClickHandler=()=>{
        setWelcomeClick(true);
    }

  return (
    <div className={WelcomePageStyle.welcomedivfull}>
        Welcome <strong>{account.name}</strong> 
        <button onClick={ClickHandler} className={WelcomePageStyle.startbutton}>start using app</button>
    </div>
  )
}
