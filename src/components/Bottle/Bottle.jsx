import React from 'react';
import './Bottle.css';

const Bottle = ({ bottles, handelAddtoCart }) => {

	console.log(bottles);
	console.log(handelAddtoCart);


	const { img, name, price, stock } = bottles

	return (
		<div className='card bottle'>
			<img src={img} alt="" srcset="" />
			<h2>Name: {name}</h2>
			<p>Price: ${price}</p>
			<p>{stock} Remaining</p>
			<button onClick={() => handelAddtoCart(bottles)}>Buy Now</button>
		</div>
	);
};

export default Bottle;