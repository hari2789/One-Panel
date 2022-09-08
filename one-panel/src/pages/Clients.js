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
			<h1 className="font-bold text-2xl">Clients</h1>
			<h5 className="font-medium flex justify-center text-xl">Navn ---- adresse ----  mail ---- tele</h5>
			<ul>
				{clients.map(client => (
					<li className="border flex justify-center">
						{client.name} 	{client.adresse} 	{client.mail} 	{client.tlf}
					</li>
					
				))}
			</ul>
		</div>
	)
}