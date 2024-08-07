import { useEffect } from "react"
import axios from "./util/axiou.customize"

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
      hello world
    </>
  )
}

export default App
