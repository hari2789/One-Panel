import { useContext } from "react"
import { Navigate } from "react-router-dom"
import TokenContext from "../TokenContext"

export default function SigIn() {
	const {setToken} = useContext(TokenContext)
	const navigate = Navigate

	function submitHandler(event) {
		event.preventDefault()
		fetch("http://localhost:3001/auth", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				username: event.target.username.value,
				password: event.target.password.value
			})
		})
			.then(res => res.json())
			.then(data => {
				setToken(data.token)
				navigate("/")
			})
	}
	
	return (
		<form onSubmit={submitHandler}>
			<div>
				<label>Username
					<input type="text" name="username" />
				</label>
			</div>
			<div>
				<label>Password
					<input type="password" name="password" />
				</label>
			</div>
			<button type="submit">Sign in</button>
		</form>
	)
}