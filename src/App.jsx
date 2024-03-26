import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewBoard from "./Components/NewBoard"
const App = () => {

  const[category,setCategory]=useState("");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewBoard category={category} />
    </div>
  )
}

export default App
