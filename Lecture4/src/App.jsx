import { useState } from "react"
import React from "react"



let App = () => {
let [data,setData] = useState("")
let store = ""
function changeData () {
     setData(store)
}
  return(
     <div>
        <h1>First Name </h1>
       <input type="text" 
        className="p-2 border-2"
        onChange={(event)=> {
          store = event.target.value
        }}
        />
       <br /> <br />
       <button className="p-2 bg-red-600 text-white"
       onClick={changeData}
       >submit</button>
       <br />
       <h1>Your Name is {data}</h1>
     </div>
  )
}

export default App