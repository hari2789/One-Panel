import { useEffect, useState, useContext } from "react"
import TokenContext from "../TokenContext"

export default function Products() {
	const {setToken} = useContext(TokenContext)
	const [products, setProducts] = useState([])
	const { token } = useContext(TokenContext)
	
	function submitHandler(event) {
		event.preventDefault()
		fetch("http://localhost:3001/db/products", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				title: event.target.title.value,
				price: event.target.price.value,
				stock: event.target.stock.value
			})
		})
			.then(res => res.json())
			.then(data => {
				setToken(data.token)
			})	
	}

	useEffect(function() {
		fetch("http://localhost:3001/db", {
			headers: {
				"authorization": "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(data =>{ console.log(data.db.products); setProducts(data.db.products)})
	}, [])

	return (
		<div className="space-x-4">
			<h1 className=" text-3xl flex justify-center">Products</h1>
			<h6>Item    Price    Stock</h6>
			<ul >
				{products.map(product => (
					<li className="border flex gap-3" >
						{product.title}{"    "}{product.price} 	{product.stock}
					</li>
					
				))}
			</ul>
		<form onSubmit={submitHandler}>
			<div className=" mt-10">
				<label className="font-semibold flex justify-center p-2">
					Title
					<input type="text" name="title" />
				</label>
			</div>
			<div>
				<label className="font-semibold flex justify-center p-2">
					Price
					<input type="text" name="price" />
				</label>
			</div>
			<div>
				<label className="font-semibold flex justify-center p-2">
					Stock
					<input type="text" name="stock" />
				</label>
			</div>
			<button type="submit" className="font-black bg-amber-400 drop-shadow-lg">Add</button>
		</form>
		</div>
		
	)
}