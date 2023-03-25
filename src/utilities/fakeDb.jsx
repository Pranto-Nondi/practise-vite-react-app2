const addToDb = id => {
   
    let shoppingCart = {};
    const storedData = (localStorage.getItem('shopping-cart'));
    if (storedData) {
        shoppingCart = JSON.parse(storedData)

    }
    const quantity = shoppingCart[id]
    if (quantity) {

        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

export { addToDb }