import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addTostoreCart, getStoreCart, removeFromCart } from '../../utilitis/localstorage';
import Cart from '../../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
	const [cart, setCart] = useState([]);
	const bottles = use(bottlesPromise);

	useEffect(() => {
		const storedCartIds = getStoreCart();
		// console.log(storedCartIds,bottles);

		const storedCart = [];

		for (const id of storedCartIds) {
			console.log(id);
			const cartBottle = bottles.find(bottle => bottle.id === id);
			if (cartBottle) {
				storedCart.push(cartBottle);
			}

		}

		setCart(storedCart);

	}, [bottles])

	const handelAddtoCart = (bottle) => {
		// console.log("Bottle will be add to the cart",bottle);
		const newCart = [...cart, bottle];
		setCart(newCart);

		addTostoreCart(bottle.id);



	}

	const handleRemoveFromCart = id => {
		console.log('remove item from the cart', id);

		const remainingCart = cart.filter(bottle => bottle.id !== id);
		setCart(remainingCart);
		removeFromCart(id);

	}
	// console.log(bottles);

	return (
		<div>
			<h3>Total Bottles: {bottles.length}</h3>
			<p>Add to Cart: {cart.length}</p>
			<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
			<div className='bottles-card'>
				{
					bottles.map(bottles => <Bottle
						key={bottles.id}
						handelAddtoCart={handelAddtoCart}
						bottles={bottles}></Bottle>)
				}
			</div>
		</div>
	);
};

export default Bottles;