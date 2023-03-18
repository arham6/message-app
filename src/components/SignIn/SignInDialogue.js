import React from 'react'
import SignInDialogueStyle from "./SignInDialogue.module.css"
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../../Context/AccountProvider';

export default function SignInDialogue() {
    
    const {setAccount}=useContext(AccountContext);

    const onLoginSuccess=(res)=>{
        const decoded=jwt_decode(res.credential);
        setAccount(decoded);
        console.log(decoded);
    }
    const onLoginError=(res)=>{
        console.log("signin failed", res);
    }

    return (
    <div className={SignInDialogueStyle.mainbox}>
        <div>
            hello, welcome to our app!
        </div>

        <div>
            <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginError}
            />
        </div>
    </div>
  )
}

