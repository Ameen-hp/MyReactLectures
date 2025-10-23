import { useState } from "react";

let Form = () => {
   let [form,setForm] = useState({name:"",password:""})

   let getData  = (e) => {
       setForm({...form,[e.target.name]:e.target.value})
       
   }
   console.log(form)
    return (
        <div>
            {/* The space-y-10 class on the form handles the vertical spacing */}
            <form action="" className="h-screen space-y-10">
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder="enter your name" className="border-2" name="name"
                     onChange={getData}
                    />
                </div>
                {/* No mt-10 needed here; the space-y-10 on the parent handles it */}
                <div>
                    <label htmlFor="">email</label>
                    <input type="password" placeholder="enter your email" name="email" className="border-2" onChange={getData} />
                </div>
        <button onClick={getData} className="text-red-400">submit</button>
            </form>
        </div>
    )
}

export default Form;