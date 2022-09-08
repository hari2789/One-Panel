import { useEffect, useState, useContext } from "react"
import TokenContext from "../TokenContext"

export default function Orders() {
	const [orders, setOrders] = useState([])
	const { token } = useContext(TokenContext)

	useEffect(function() {
		fetch("http://localhost:3001/db", {
			headers: {
				"authorization": "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(data =>{ console.log(data.db.orders); setOrders(data.db.orders)})
	}, [])

	return (
		<div>
			<h1>Orders</h1>
			
			<ul>
				<h6>Date 		Client Name 	Amount		isDelivered	</h6>
				{orders.map(orders => (
					<li>
						{orders.date }		{orders.cname}		 	{orders.amount}		{orders.isdelivered}
					</li>
					
				))}
			</ul>
		</div>
	)
}