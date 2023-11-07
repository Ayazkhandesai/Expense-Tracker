import { useState } from "react"
import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"

export const AddTransaction = () => {
 const {addTranaction}=useContext(GlobalContext)

 const [text,setText]=useState("")
 const [amount,setAmount]=useState(0)

 const onchangeText=(e) =>{setText(e.target.value)}
 const onchangeAmount=(e)=>{setAmount(e.target.value)}

function onsubmit(e)
{
  e.preventDefault()
  const newtransaction={
    id:Math.floor(Math.random() * 1000000),
    text:text,
    amount:+amount
  }
  addTranaction(newtransaction)
  setText("")
  setAmount(0)
}
  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onsubmit}>
            <div className="form-control">
              <label htmlFor="text">Text</label>
              <input type="text" value={text} onChange={onchangeText} placeholder="Enter text..." />
            </div>
            <div className="form-control">
              <label htmlFor="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
              >
              <input type="number" value={amount}  onChange={onchangeAmount} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
          </form>
    </>
  )
}
