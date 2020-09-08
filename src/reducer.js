export const initialState = {
    basket: [],
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
}

export default reducer;