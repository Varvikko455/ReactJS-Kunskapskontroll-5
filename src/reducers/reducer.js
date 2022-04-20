
let initialState = {
    total_price: 0,
    coffees: []
}



const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {


        case 'ADD_COFFEE':
            const coffeeAlreadyInCart = state.coffees.some((coffee) => coffee.id === action.payload.id)
            if (!coffeeAlreadyInCart){
                return {
                    ...state,
                    total_price: state.total_price + action.payload.price,
                    coffees: [...state.coffees, action.payload]
                }
            }
            


        case 'INCREASE_COFFEE':

            const cart = state.coffees.map((coffeeItem) => {
                if (coffeeItem.id === action.payload.id) {
                    const quantity = coffeeItem.quantity + 1
                    coffeeItem = { ...coffeeItem, quantity}
                }
                return coffeeItem
            })

            const totalPrice = cart.reduce((total, {price, quantity}) =>{
                return total + (price*quantity)
            },0)

            return {
                ...state,
                total_price: totalPrice,
                coffees: cart
            }
            


        case 'DECREASE_COFFEE':

            const itemCart = state.coffees.map((coffeeItem) => {
                if (coffeeItem.id === action.payload.id) {
                    coffeeItem = { ...coffeeItem, quantity: coffeeItem.quantity - 1}
                }
                return coffeeItem
            })
            

            return {
                ...state,
                total_price: state.total_price - action.payload.price,
                coffees: itemCart
            }




        case 'Clear_COFFEE':

            return {
                ...state,
                coffees: []
            }

        default:
            return state;
    }
}

export default coffeeReducer;