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
		<div>
			<h1>Products</h1>
			<ul>
				{products.map(product => (
					<li>
						{product.title}		{product.price} 	{product.stock}
					</li>
					
				))}
			</ul>
		<form onSubmit={submitHandler}>
			<div>
				<label>
					Title
					<input type="text" name="title" />
				</label>
			</div>
			<div>
				<label>
					Price
					<input type="text" name="price" />
				</label>
			</div>
			<div>
				<label>
					Stock
					<input type="text" name="stock" />
				</label>
			</div>
			<button type="submit">Add</button>
		</form>
		</div>
		
	)
}