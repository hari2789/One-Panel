import { useEffect, useState, useContext } from "react"
import TokenContext from "../TokenContext"

export default function Clients() {
	const [clients, setClients] = useState([])
	const { token } = useContext(TokenContext)

	useEffect(function() {
		fetch("http://localhost:3001/db", {
			headers: {
				"authorization": "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(data =>{ console.log(data.db.clients); setClients(data.db.clients)})
	}, [])

	return (
		<div>
			<h1>Clients</h1>
			<ul>
				{clients.map(client => (
					<li>
						{client.name} 	{client.adresse} 	{client.mail} 	{client.tlf}
					</li>
					
				))}
			</ul>
		</div>
	)
}