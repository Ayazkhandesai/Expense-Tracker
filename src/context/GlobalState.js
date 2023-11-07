import { createContext, useReducer } from "react";
import React  from "react";
// import {AppReducer} from "./AppReducer"

// Initial State
const initialstate={ 
    transactions:[
    //    { id:1, text:"Flower" , amount:-20},
    //    { id:2, text:"Salary" , amount:300},
    //    { id:3, text:"Book"   , amount:-10},
    //    { id:4, text:"Camera" , amount:150},
    //    { id:5, text:"Repair" , amount:-20},
    ]
}

// Create Context
export const GlobalContext=createContext(initialstate)

const AppReducer= (state,action) =>{
    switch(action.type){
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions : state.transactions.filter((transaction)=> transaction.id !== action.payload )
            }
        case "ADD_TRANSACTION":
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        default:
            return state
    }
}


// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] =useReducer(AppReducer, initialstate)
    
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTranaction(transaction)
    {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return(
    <GlobalContext.Provider value={
        {transactions:state.transactions,
        deleteTransaction,
        addTranaction }} >

        {children}
    </GlobalContext.Provider>
    )
}