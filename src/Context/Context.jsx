import { createContext,useReducer } from "react";

const CartContext = createContext({
    item: [], // List of all items
    addItem: (item) => {}, //object of item
    deleteItem: (id) =>{}
})

function Reducer(state, action){
    if(action.type === 'Add_item'){
        const existingCartItemIndex = state.item.findIndex(item => item.id === action.item.id)
        const updatedItems = [...state.item]
        if(existingCartItemIndex > -1){
            const ExistingItem = state.item[existingCartItemIndex]
            const updateItem = {
                ...ExistingItem ,
                quantity: ExistingItem.quantity + 1
            }

            updatedItems[existingCartItemIndex] = updateItem
        }else{
            updatedItems.push({...action.item, quantity: 1})
        }

        return {
            ...state,
            item: updatedItems
        }
    }

    if(action.type === 'remove_item'){
        const existingCartItemIndex = state.item.findIndex(item => item.id === action.id)

        const existingCartItem = state.item[existingCartItemIndex]
        const updatedItems = [...state.item]
        if(existingCartItem.quantity === 1){
            updatedItems.splice(existingCartItem, 1);
        }else{
            const updateitem ={
                ...existingCartItem, 
                quantity: existingCartItem.quantity - 1 
            }
            updatedItems[existingCartItem] = updateitem 
        }

        return {
            ...state,
            item: updatedItems
        }
    }

    return state
}

export function CartContextProvider({children}){
    const [state, dispatch] = useReducer(Reducer, {item : []})

    function addItem(item){
        dispatch({
            type: 'Add_item',
            item
        })
    }

    function deleteItem(id){
        dispatch({
            type: 'remove_item',
            id
        })
    }


    const cartContext = {
        item: state.item,
        addItem,
        deleteItem  

    }

    console.log(cartContext)
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}


export default CartContext;