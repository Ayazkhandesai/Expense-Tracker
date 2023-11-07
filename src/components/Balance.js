import { useContext } from 'react'
import React  from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transactions}=useContext(GlobalContext)
  // Calculate total balance
  const income= transactions.map((transaction)=> transaction.amount).reduce((acc,curVal)=>{
    return acc+curVal;
    },0);

    const expense=transactions.filter(transaction=>transaction.amount<0).reduce((acc,curVal)=>{
      return acc+curVal.amount;
      },0)*-1;
  return (
     <>
    <h4>Your Balance </h4>
    <h1 id ="balance">${income}</h1>
    </>
  )
}
