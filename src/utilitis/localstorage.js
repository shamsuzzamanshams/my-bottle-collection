const getCartFromLocalStorage = () => {
	const storeCardString = localStorage.getItem('cart');
	if (storeCardString) {
		const storeCart = JSON.parse(storeCardString);
		return storeCart
	}
	return [];

}

const saveToLocalStorage = cart => {
	const cartSringified = JSON.stringify(cart);
	localStorage.setItem('cart', cartSringified);
}

const addItemToCartLocalStorage = id => {
	const cart = getCartFromLocalStorage();
	const newCart = [...cart, id];

	saveToLocalStorage(newCart);
}

export {
	getCartFromLocalStorage as getStoreCart,
	addItemToCartLocalStorage as addTostoreCart
}