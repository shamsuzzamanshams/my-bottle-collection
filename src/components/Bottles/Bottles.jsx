import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlesPromise }) => {
	const [cart,setCart] = useState([]);
	const bottles = use(bottlesPromise);

	const handelAddtoCart = (bottle) =>{
		console.log("Bottle will be add to the cart",bottle);
		
	}
	// console.log(bottles);

	return (
		<div>
			<h3>Total Bottles: {bottles.length}</h3>
			<div className='bottles-card'>
				{
					bottles.map(bottles => <Bottle 
						key={bottles.id}
						handelAddtoCart = {handelAddtoCart} 
						bottles={bottles}></Bottle>)
				}
			</div>
		</div>
	);
};

export default Bottles;