import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import TokenContext from "../TokenContext"


export default function Layout() {
	const {setToken} = useContext(TokenContext)

	function signout() {
		setToken(null)
		window.location.href("/")
	}

	return (
		<div>
			<nav>
				<menu>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
					<Link to="/clients">Clients</Link>
					</li>
					<li>
					<Link to="/orders">Orders</Link>
					</li>			
					<li>
						<button onClick={signout}>Sign out</button>
					</li>
				</menu>
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	)
}