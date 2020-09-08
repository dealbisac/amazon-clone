export const initialState = {
    basket: [],
}

// export const getbasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            /* 
            let newbasket = [...state.basket]
            const index = state.basket.findIndex(
                item => item.id === action.payload
            )
            
            if(index>=0)
                newbasket.splice(index,1)
            else
                console.warn(`can't remove as it's not available`)
            return {
                ...state, 
                basket: newbasket
            }
            */


            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload)
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;