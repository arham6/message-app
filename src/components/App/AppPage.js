import React from 'react'
import AppPageStyle from "./AppPage.module.css"
import LeftMenu from './Menu/LeftMenu'
import EmptyChat from './Chat/EmptyChat'
export default function AppPage() {
  return (
    <div className={AppPageStyle.maindiv}>
        <div className={AppPageStyle.blackscreendiv}>
            <div className={AppPageStyle.leftdiv}>
                <LeftMenu/>
            </div>

            <div className={AppPageStyle.rightdiv}>
                <EmptyChat/>
            </div>
        </div>
    </div>
  )
}
