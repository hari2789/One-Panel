import { useEffect, useState, useContext } from "react"
import TokenContext from "../TokenContext"

export default function Products() {
	const [products, setProducts] = useState([])
	const { token } = useContext(TokenContext)

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
		</div>
	)
}