

export const addCoffee = (coffee) => {
    return {
        type: 'ADD_COFFEE',
        total_price: coffee.price,
        payload: coffee
    }
}

export const increaseCoffee = (coffee) => {
    return {
        type: 'INCREASE_COFFEE',
        total_price: coffee.price,
        payload: coffee
    }
}

export const decreaseCoffee = (coffee) => {
    return {
        type: 'DECREASE_COFFEE',
        total_price: coffee.price,
        payload: coffee
    }
}


export const quantity = (coffee) => {
    return {
        type: 'INCRESE_QUANTITY',
        amount_coffee: coffee + 1

    }
}




export const clearCoffe = () => {
    return {
        type: 'Clear_COFFEE',

    }
}




