import React, { createContext, useReducer } from 'react';
import GroceryReducer from '../context/GroceryReducer';

//initial state
const initialState = {
    groceries: [
        {
            image: 'https://images.unsplash.com/photo-1513791053024-3b50799fdd7b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'tomato',
            qty: 10,
            expiration: Date.now(),
            category: 'vegetable',
            id: 0.12654367
        },
        {
            image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'carrot',
            qty: 5,
            expiration: 'Thu Jul 20 2020 12:55:58 GMT+0100 (West Africa Standard Time)',
            category: 'vegetable',
            id: 0.12656547
        },
        {
            image: 'https://images.unsplash.com/photo-1589469224608-c84d02c71b94?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'lettuce',
            qty: 20,
            expiration: 'Thu Jul 30 2020 12:55:58 GMT+0100 (West Africa Standard Time)',
            category: 'vegetable',
            id: 0.12656767
        },
        {
            image: 'https://images.unsplash.com/photo-1531191357516-0aa0289ab6c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            name: 'maize',
            qty: 20,
            expiration: Date.now(),
            category: 'grain',
            id: 0.12650915
        }
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//Provider Component
//as GlobalProvider
export const GroceryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GroceryReducer, initialState);

    //Actions
    const removeGrocery = (id) => {
        dispatch({
            type: 'REMOVE_GROCERY',
            payload: id
        })
    }

    const addGrocery = (grocery) => {
        dispatch({
            type: 'ADD_GROCERY',
            payload: grocery
        })
    }

    const editGrocery = (grocery) => {
        dispatch({
            type: 'EDIT_GROCERY',
            payload: grocery
        })
    }


    return (
        <GlobalContext.Provider value={{
            groceries: state.groceries,
            removeGrocery: removeGrocery,
            addGrocery: addGrocery,
            editGrocery: editGrocery
        }}>
            {children}
        </GlobalContext.Provider>
    )
}