import React from 'react';
import SignInDialogue from './SignInDialogue';
import SignInHeader from './SignInHeader';
import SignInPageStyle from "./SignInPage.module.css";
export default function SignInPage() {
  return (
    <div className={SignInPageStyle.maindiv}>
        <SignInHeader/>
        <SignInDialogue/>
    </div>
  );
}
