import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import TokenContext from "../TokenContext"


export default function Layout() {
	const {setToken} = useContext(TokenContext)

	function signout() {
		setToken(null)
		window.location.href("/signin")
	}

	return (
		<div>
			
			<nav className='flex sm:justify-center space-x-4 '>	
				<menu className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
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