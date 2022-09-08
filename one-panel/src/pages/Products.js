import { useEffect, useState, useContext } from "react"
import TokenContext from "../TokenContext"

export default function Products() {
	const [products, setProducts] = useState([])
	const { token } = useContext(TokenContext)

	useEffect(function() {
		fetch("http://localhost:3001/products", {
			headers: {
				"authorization": "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{products.map(product => (
					<li>
						{product.name}
					</li>
				))}
			</ul>
		</div>
	)
}