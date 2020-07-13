export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_GROCERY':
            return {
                groceries: state.groceries.filter(grocery => {
                    return grocery.id !== action.payload
                })
            }
        case 'ADD_GROCERY':
            return {
                groceries: [action.payload, ...state.groceries]
            }

        case 'EDIT_USER':
            const updatedGrocery = action.payload;
            const editGroceries = state.groceries.map(grocery => {
                if (grocery.id === updatedGrocery.id) {
                    return updatedGrocery
                }
                return grocery
            })

            return {
                groceries: updatedGrocery
            }
        default:
            return state
    }
}