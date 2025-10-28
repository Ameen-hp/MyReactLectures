import React, { useEffect, useState } from "react"
import axios from "axios";
let App = () => {
  let [users,setUsers] = useState([])
  useEffect(()=> {
    
    let fetchData =  async () => {
       try{
         let response = await axios.get("https://jsonplaceholder.typicode.com/users")

         setUsers(response.data)
        
       }
       catch(err) {
        console.log("error while fetching data",err)
       }
      
    }

    fetchData()
  },[])

  return (
    <div>
       <h1>
          {
          
          users.map(element => (
            <div >
               <h1 className="text-4xl bg-yellow-500 text-red-500">User {element.id} data </h1>
              <h1> Name: {element.name} </h1>
              <h1>email: {element.email}</h1>
              <h1>street: {element.address.street}</h1>
              <h1>phone: {element.phone}</h1>

            </div>
          ))
          
          }
       </h1>
       
    </div>
  )
}

export default App