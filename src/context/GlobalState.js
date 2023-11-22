import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    transactions: [
        {id:1, text: 'Lunch', amount: -120},
        {id:2, text: 'Salary', amount: 30000},
        {id:3, text: 'Book', amount: -1930},
        {id:4, text: 'Camera', amount: 130000},
        {id:5, text: 'Other', amount: -10000}
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}