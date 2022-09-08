import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SigIn from "./pages/SignIn"
import TokenContext from "./TokenContext"
import { useState } from "react"

function App() {
  const [token, setToken] = useState(null)

  return (
    <TokenContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          {token ? <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Route> :
          <Route path="/" element={<SigIn />} />}
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  )
}

export default App
