import { useEffect } from "react"
import axios from "./util/axiou.customize"
import Header from "./components/layout/header"
import { Outlet } from "react-router-dom"

function App() {

  useEffect(() => {
    const fetchHelloWorld = async() => {
      const res = await axios.get(`/v1/api`)
      console.log(">>> Check res:", res)
    }
    fetchHelloWorld()
  }, [])
  return (
    <>
      <Header/>
      <Outlet/>
     
    </>
  )
}

export default App
