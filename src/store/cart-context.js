import React, {createContext} from 'react'


const CartContext = createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
    tokenid:'',
})
export default CartContext;