import { useState } from "react"




let Controlled = () => {
   //  controlled components 

    let [name,setName] = useState("")

    let ChangeButton = () => {
         setName("Ameen")
    }
   return (
    <div>
       <h1> Name = {name}</h1>
       <h2> Name = {name}</h2>
       <button onClick={ChangeButton}>click</button>
    </div>
   )
}

export default Controlled