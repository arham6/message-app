import React from 'react'
import SignInPage from './SignIn/SignInPage'
import { useContext } from 'react'
import { AccountContext } from '../Context/AccountProvider'
import AppPage from './App/AppPage';
import { WelcomeContext } from '../Context/WelcomeProvider';
import WelcomePage from './Welcome/WelcomePage';
export default function MessengerApp() {
    const {account}=useContext(AccountContext);
    const {welcomeClick}=useContext(WelcomeContext);
    function render(){
        if(!account){
            return <SignInPage/>
        }
        else if(account && !welcomeClick){ 
            return <WelcomePage/>
        }
        else{
            return <AppPage/>
        }
    }

  return (
    <div>
        {render()}
    </div>
  );
}
