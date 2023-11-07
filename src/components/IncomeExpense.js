import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpense = () => {
  const {transactions}=useContext(GlobalContext)
  let income=0, expenses=0;
  transactions.forEach((transaction)=>{
    if (transaction.amount>0){
      income+=transaction.amount
      }else{
        expenses-=transaction.amount
        }
        })
  return (
    <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income} </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-plus" className="money minus">-${expenses} </p> 
            </div>
        </div>
    </>
  )
}
