

const addToDb = id => {
    let shoppingCart = {};

    const storedData = (localStorage.getItem('shopping-cart'));
    if (storedData) {
        shoppingCart = JSON.parse(storedData);

    }
    const quantity = shoppingCart[id];
    if (quantity) {

        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const removeCart = id => {
    const storedData = (localStorage.getItem('shopping-cart'));
    if (storedData) {
        const shoppingCart = JSON.parse(storedData)
        if (id in shoppingCart) {
            console.log(id)
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }

    }

}

export { addToDb, removeCart }