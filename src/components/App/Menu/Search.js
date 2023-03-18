import React from 'react'
import SearchStyle from "./Search.module.css"
export default function Search(){
  return (
    <div className={SearchStyle.searchdiv}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search Chats..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">🔍</button>
      </div>
    </div>
  )
}
